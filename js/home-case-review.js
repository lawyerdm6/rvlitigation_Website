// Enhance ordinary practice links with guidance and a path to the homepage form.
(() => {
    const root = document.getElementById('home-case-review');
    if (!root) return;

    const matters = {
        business: {
            eyebrow: 'Business disputes & anticipated litigation',
            title: 'Address the dispute before it defines your business.',
            copy: 'Discuss threatened claims, demand letters, contract disputes, ownership conflicts, or an active business lawsuit. Our team reviews the issue and the stage of the dispute.',
            url: '/business-litigation/',
            label: 'Explore business litigation →',
            formValue: 'Business litigation / contract dispute',
            items: ['Your role and the nature of the business dispute', 'Where the dispute is located and whether a case is filed', 'Any demand, response, or court deadline']
        },
        criminal: {
            eyebrow: 'Criminal defense',
            title: 'Discuss the allegations and your next court date.',
            copy: 'We review selected criminal defense matters, including investigations and pending charges. Tell us the type of allegation and where the matter is being handled.',
            url: '/criminal-defense/',
            label: 'Explore criminal defense →',
            formValue: 'Criminal defense',
            items: ['The charge or type of investigation', 'The county or court handling the matter', 'Your next court date or other known deadline']
        },
        lawsuit: {
            eyebrow: 'Lawsuit defense for individuals',
            title: 'You’ve been named in a lawsuit. Start with a case review.',
            copy: 'If you have been sued personally, tell us about the claims and when you received the court papers. Our team reviews the matter and whether it fits our lawsuit-defense practice.',
            url: '/private-civil-matters/civil-lawsuit-defense',
            label: 'Explore lawsuit defense →',
            formValue: 'Private matter / lawsuit defense',
            items: ['The type of claim and your role in the lawsuit', 'The county or court where the case is filed', 'When you received the papers and any known deadline']
        }
    };

    const panel = document.getElementById('home-case-panel');
    const choices = Array.from(root.querySelectorAll('[data-case-matter]'));
    const matterField = document.getElementById('home-case-matter-type');
    const practice = document.getElementById('home-case-practice-link');
    const inquire = root.querySelector('.home-case-inquire');
    let selectedMatter = null;

    choices.forEach(choice => {
        choice.setAttribute('role', 'button');
        choice.setAttribute('aria-pressed', 'false');
        choice.setAttribute('aria-controls', 'home-case-panel');
        choice.addEventListener('click', event => {
            // Preserve explicit open-in-new-tab/window gestures on the underlying link.
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const selected = matters[choice.dataset.caseMatter];
            if (!selected) return;
            event.preventDefault();
            // A different card re-arms the gentle prompt after the CTA has been used.
            if (selectedMatter !== choice.dataset.caseMatter) {
                selectedMatter = choice.dataset.caseMatter;
                inquire.classList.add('is-breathing');
            }
            choices.forEach(item => item.setAttribute('aria-pressed', String(item === choice)));
            document.getElementById('home-case-panel-eyebrow').textContent = selected.eyebrow;
            document.getElementById('home-case-panel-title').textContent = selected.title;
            document.getElementById('home-case-panel-copy').textContent = selected.copy;
            practice.href = selected.url;
            practice.textContent = selected.label;
            document.getElementById('home-case-prepare-list').replaceChildren(...selected.items.map(text => {
                const li = document.createElement('li');
                li.textContent = text;
                return li;
            }));
            if (matterField) matterField.value = selected.formValue;
            panel.hidden = false;
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            panel.scrollIntoView({behavior: reducedMotion ? 'instant' : 'smooth', block: 'nearest'});
        });
        choice.addEventListener('keydown', event => {
            if (event.key === ' ') {
                event.preventDefault();
                choice.click();
            }
        });
    });

    inquire.addEventListener('click', event => {
        inquire.classList.remove('is-breathing');
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const formWrapper = document.getElementById('home-contact-form');
        if (!formWrapper) return;
        event.preventDefault();
        // Handle only this CTA, before the shared site's generic anchor scrolling.
        event.stopImmediatePropagation();
        const firstField = document.querySelector('#home-contact input[name="name"]');
        if (firstField) firstField.focus({preventScroll: true});
        const header = document.querySelector('.main-header');
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const top = formWrapper.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({top: Math.max(0, top), behavior: reducedMotion ? 'instant' : 'smooth'});
    }, {capture: true});
})();
