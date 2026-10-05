/* Shared navigation and intake. Form submission remains native to FormSubmit. */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.rv-menu-toggle');
  const menu = document.querySelector('#site-menu');
  const closeMenu = () => { menu?.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false'); };
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    menu?.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); }
  });
  menu?.querySelectorAll('a').forEach(link => {
    if (new URL(link.href).pathname === location.pathname) link.setAttribute('aria-current', 'page');
    link.addEventListener('click', closeMenu);
  });
  window.matchMedia('(min-width: 1181px)').addEventListener('change', closeMenu);
  document.querySelectorAll('.rv-form').forEach(form => {
    const matter = form.elements.matter_type;
    const updateFields = () => {
      form.querySelectorAll('[data-matter]').forEach(fieldset => {
        const visible = fieldset.dataset.matter === matter.value;
        fieldset.hidden = !visible;
        fieldset.disabled = !visible;
      });
      form.elements._subject.value = 'RV Litigation inquiry: ' + (matter.value || 'General');
    };
    matter.addEventListener('change', updateFields);
    updateFields();
    form.addEventListener('submit', () => {
      form.querySelector('.rv-form-status').textContent = 'Submitting your inquiry…';
    });
  });
});
