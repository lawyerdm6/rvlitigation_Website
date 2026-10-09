// Progressive enhancements for keyboard access, form errors and motion preferences.
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    if (splash) document.addEventListener('focusin', () => { splash.hidden = true; splash.style.display = 'none'; }, { once: true });
    document.querySelectorAll('.skip-link').forEach(link => link.addEventListener('click', event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        document.getElementById('main-content').focus();
    }, { capture: true }));

    const questions = Array.from(document.querySelectorAll('.faq-question'));
    const setAnswer = (button, open) => {
        const item = button.closest('.faq-item');
        const answer = item && item.querySelector('.faq-answer');
        if (!answer) return;
        item.classList.toggle('open', open);
        button.setAttribute('aria-expanded', String(open));
        answer.hidden = !open;
    };
    questions.forEach((button, index) => {
        const item = button.closest('.faq-item');
        const answer = item && item.querySelector('.faq-answer');
        if (!answer) return;
        button.type = 'button';
        if (!button.id) button.id = 'a11y-faq-question-' + (index + 1);
        if (!answer.id) answer.id = 'a11y-faq-answer-' + (index + 1);
        button.setAttribute('aria-controls', answer.id);
        answer.setAttribute('aria-labelledby', button.id);
        button.querySelectorAll('.faq-icon').forEach(icon => icon.setAttribute('aria-hidden', 'true'));
        setAnswer(button, item.classList.contains('open'));
        button.addEventListener('click', event => {
            // Replace older inline accordion handlers without stacking state changes.
            event.preventDefault();
            event.stopImmediatePropagation();
            const open = button.getAttribute('aria-expanded') !== 'true';
            questions.forEach(other => setAnswer(other, other === button && open));
        }, { capture: true });
    });

    document.querySelectorAll('form.contact-form').forEach((form, formIndex) => {
        form.noValidate = true;
        const controls = Array.from(form.querySelectorAll('input:not([type="hidden"]), select, textarea'));
        const summary = document.createElement('div');
        summary.className = 'form-error-summary';
        summary.tabIndex = -1;
        summary.hidden = true;
        summary.setAttribute('role', 'alert');
        form.prepend(summary);
        const clearError = control => {
            control.setCustomValidity('');
            control.removeAttribute('aria-invalid');
            const errorId = control.id + '-error';
            const error = document.getElementById(errorId);
            if (error) error.remove();
            const descriptions = (control.getAttribute('aria-describedby') || '').split(/\s+/).filter(id => id && id !== errorId);
            if (descriptions.length) control.setAttribute('aria-describedby', descriptions.join(' '));
            else control.removeAttribute('aria-describedby');
        };
        const validateControl = control => {
            control.setCustomValidity('');
            if (control.required && !control.value.trim()) control.setCustomValidity('Please complete this field.');
            if (control.type === 'email' && control.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value)) control.setCustomValidity('Enter a valid email address.');
            return control.checkValidity();
        };
        const labelFor = control => {
            const label = form.querySelector('label[for="' + control.id + '"]');
            return label ? label.textContent.replace('(required)', '').trim() : control.name;
        };
        controls.forEach(control => control.addEventListener('input', () => {
            if (control.getAttribute('aria-invalid') !== 'true') return;
            const summaryLink = summary.querySelector('a[href="#' + control.id + '"]');
            if (validateControl(control)) {
                clearError(control);
                if (summaryLink) summaryLink.parentElement.remove();
                if (!summary.querySelector('a')) { summary.hidden = true; summary.replaceChildren(); }
            } else {
                const error = document.getElementById(control.id + '-error');
                if (error) error.textContent = control.validationMessage;
                if (summaryLink) summaryLink.textContent = labelFor(control) + ': ' + control.validationMessage;
            }
        }));
        form.addEventListener('submit', event => {
            summary.replaceChildren();
            const invalid = [];
            controls.forEach(control => {
                clearError(control);
                if (validateControl(control)) return;
                const error = document.createElement('p');
                error.className = 'field-error';
                error.id = control.id + '-error';
                error.textContent = control.validationMessage;
                control.insertAdjacentElement('afterend', error);
                control.setAttribute('aria-invalid', 'true');
                const describedBy = (control.getAttribute('aria-describedby') || '').trim();
                control.setAttribute('aria-describedby', (describedBy ? describedBy + ' ' : '') + error.id);
                invalid.push(control);
            });
            summary.hidden = invalid.length === 0;
            if (invalid.length) {
                event.preventDefault();
                event.stopImmediatePropagation();
                const message = document.createElement('p');
                message.textContent = 'Please correct the highlighted fields before submitting.';
                summary.append(message);
                invalid.forEach(control => {
                    const line = document.createElement('p');
                    const link = document.createElement('a');
                    link.href = '#' + control.id;
                    link.textContent = labelFor(control) + ': ' + control.validationMessage;
                    link.addEventListener('click', e => { e.preventDefault(); control.focus(); });
                    line.append(link);
                    summary.append(line);
                });
                summary.focus();
            }
        }, { capture: true });
    });

    // Personal display preferences, saved only in this browser.
    const root = document.documentElement;
    const storageKey = 'rv-accessibility-preferences-v1';
    const defaults = { size: 100, font: false, spacing: false, contrast: false, links: false, motion: false, guide: false, cursor: false };
    let settings = { ...defaults };
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey));
        if (saved && typeof saved === 'object') {
            Object.keys(defaults).forEach(key => {
                if (key === 'size' ? [100, 125, 150].includes(saved[key]) : typeof saved[key] === 'boolean') settings[key] = saved[key];
            });
        }
    } catch (_) { /* Settings still work when browser storage is unavailable. */ }
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const videos = Array.from(document.querySelectorAll('.hero video'));
    videos.forEach(video => { video.setAttribute('aria-hidden', 'true'); video.tabIndex = -1; });
    const icon = (content, className = '') => `<svg class="${className}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${content}</svg>`;
    const personIcon = icon('<circle cx="12" cy="4.5" r="2"/><path d="M4 9l8 2 8-2M12 11v5m0 0-4 6m4-6 4 6"/>');
    const launcher = document.createElement('button');
    launcher.type = 'button';
    launcher.className = 'a11y-launcher';
    launcher.setAttribute('aria-label', 'Accessibility settings');
    launcher.setAttribute('aria-haspopup', 'dialog');
    launcher.setAttribute('aria-controls', 'rv-accessibility-panel');
    launcher.setAttribute('aria-expanded', 'false');
    launcher.innerHTML = personIcon;
    const panel = document.createElement('dialog');
    panel.id = 'rv-accessibility-panel';
    panel.className = 'a11y-panel';
    panel.setAttribute('aria-labelledby', 'rv-accessibility-title');
    panel.setAttribute('aria-describedby', 'rv-accessibility-description');
    const options = [
        ['font', 'Readable font', '<path d="m3 19 6-14 6 14M5 14h8m4-3h4m-2 0v8"/>'],
        ['spacing', 'Text spacing', '<path d="M9 5h12M9 12h12M9 19h12M3 4v16m-2-2 2 2 2-2M1 6l2-2 2 2"/>'],
        ['contrast', 'High contrast', '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/>'],
        ['links', 'Highlight links', '<path d="m10 14 4-4m-5-2 2-2a4 4 0 0 1 6 6l-2 2m0 2-2 2a4 4 0 0 1-6-6l2-2"/>'],
        ['motion', 'Pause motion', '<path d="M8 5v14M16 5v14" stroke-width="3"/>'],
        ['guide', 'Reading guide', '<path d="M3 6h18M3 18h18"/><path d="M3 11h18v3H3z" fill="currentColor"/>'],
        ['cursor', 'Larger cursor', '<path d="m6 3 12 11-6 1-3 6z"/>']
    ];
    panel.innerHTML = `
        <div class="a11y-panel-heading">
            <div><span class="a11y-eyebrow">YOUR READING EXPERIENCE</span><h2 id="rv-accessibility-title">Accessibility</h2></div>
            <button type="button" class="a11y-close" aria-label="Close accessibility settings" autofocus>${icon('<path d="m6 6 12 12M18 6 6 18"/>')}</button>
        </div>
        <p id="rv-accessibility-description">Adjust the page to suit you.</p>
        <div class="a11y-size-group" role="group" aria-label="Text size">
            <span>Text size</span><div>${[100, 125, 150].map(size => `<button type="button" data-size="${size}" aria-label="Text size ${size}%" aria-pressed="false">${size}%</button>`).join('')}</div>
        </div>
        <div class="a11y-options">${options.map(([key, label, shape]) => `<button type="button" class="a11y-option${key === 'motion' ? ' a11y-motion' : ''}" data-setting="${key}" aria-pressed="false">${icon(shape)}<span>${label}</span><span class="a11y-option-state" aria-hidden="true">Off</span></button>`).join('')}</div>
        <p class="a11y-device-note" hidden>Your device’s reduced-motion setting is active.</p>
        <div class="a11y-panel-footer">
            <button type="button" class="a11y-reset">Reset settings</button>
            <a href="/accessibility">Accessibility assistance ${icon('<path d="M5 12h14m-5-5 5 5-5 5"/>')}</a>
            <p>Preferences are saved in this browser.</p>
        </div>
        <span class="sr-only a11y-status" role="status" aria-live="polite"></span>`;
    const guide = document.createElement('div');
    guide.className = 'a11y-reading-guide';
    guide.setAttribute('aria-hidden', 'true');
    guide.hidden = true;
    document.body.append(launcher, panel, guide);
    const toggleButtons = Array.from(panel.querySelectorAll('[data-setting]'));
    const status = panel.querySelector('.a11y-status');
    const save = () => {
        try { localStorage.setItem(storageKey, JSON.stringify(settings)); } catch (_) { /* Optional persistence. */ }
    };
    const updateMotion = () => {
        const paused = settings.motion || preference.matches;
        root.toggleAttribute('data-motion-paused', paused);
        videos.forEach(video => {
            if (paused) video.pause();
            else video.play().catch(() => { /* Autoplay may be blocked by the browser. */ });
        });
        const button = panel.querySelector('[data-setting="motion"]');
        button.setAttribute('aria-pressed', String(paused));
        button.disabled = preference.matches;
        button.querySelector('.a11y-option-state').textContent = paused ? 'On' : 'Off';
        panel.querySelector('.a11y-device-note').hidden = !preference.matches;
    };
    const applySettings = () => {
        root.dataset.a11ySize = String(settings.size);
        ['font', 'spacing', 'contrast', 'links', 'cursor'].forEach(key => root.toggleAttribute('data-a11y-' + key, settings[key]));
        toggleButtons.forEach(button => {
            const active = settings[button.dataset.setting];
            button.setAttribute('aria-pressed', String(active));
            button.querySelector('.a11y-option-state').textContent = active ? 'On' : 'Off';
        });
        panel.querySelectorAll('[data-size]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.size) === settings.size)));
        guide.hidden = !settings.guide || panel.open;
        updateMotion();
    };
    toggleButtons.forEach(button => button.addEventListener('click', () => {
        const key = button.dataset.setting;
        settings[key] = !settings[key];
        applySettings();
        save();
    }));
    panel.querySelectorAll('[data-size]').forEach(button => button.addEventListener('click', () => {
        settings.size = Number(button.dataset.size);
        applySettings();
        save();
    }));
    panel.querySelector('.a11y-reset').addEventListener('click', () => {
        settings = { ...defaults };
        applySettings();
        save();
        status.textContent = 'Display settings reset.' + (preference.matches ? ' Your device’s reduced-motion preference is still respected.' : '');
    });
    launcher.addEventListener('click', () => {
        panel.showModal();
        launcher.setAttribute('aria-expanded', 'true');
        guide.hidden = true;
    });
    panel.querySelector('.a11y-close').addEventListener('click', () => panel.close());
    panel.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const controls = Array.from(panel.querySelectorAll('button:not(:disabled), a[href]'));
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });
    panel.addEventListener('click', event => {
        if (event.target !== panel) return;
        const rect = panel.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) panel.close();
    });
    panel.addEventListener('close', () => {
        launcher.setAttribute('aria-expanded', 'false');
        guide.hidden = !settings.guide;
        launcher.focus({ preventScroll: true });
    });
    const positionGuide = y => { guide.style.top = Math.max(0, Math.min(y + 10, window.innerHeight - 4)) + 'px'; };
    document.addEventListener('pointermove', event => {
        if (settings.guide && !panel.open) positionGuide(event.clientY);
    }, { passive: true });
    document.addEventListener('focusin', event => {
        if (settings.guide && !panel.open && !event.target.closest('.a11y-launcher')) positionGuide(event.target.getBoundingClientRect().bottom);
    });
    preference.addEventListener('change', updateMotion);
    // Honor a preference changed in another tab without storing any visitor information.
    window.addEventListener('storage', event => {
        if (event.key !== storageKey) return;
        try {
            const saved = JSON.parse(event.newValue);
            settings = { ...defaults };
            if (saved && typeof saved === 'object') Object.keys(defaults).forEach(key => {
                if (key === 'size' ? [100, 125, 150].includes(saved[key]) : typeof saved[key] === 'boolean') settings[key] = saved[key];
            });
            applySettings();
        } catch (_) { /* Ignore malformed preferences. */ }
    });
    applySettings();
});
