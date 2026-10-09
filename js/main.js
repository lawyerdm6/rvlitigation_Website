// RV Litigation Group PC - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Splash Screen Handler
    const splashScreen = document.getElementById('splash-screen');

    if (splashScreen) {
        // Show splash for 3 seconds then fade out
        setTimeout(function() {
            splashScreen.classList.add('fade-out');
            // Remove from DOM after animation
            setTimeout(function() {
                splashScreen.style.display = 'none';
            }, 800);
        }, 3000);
    }

    // Native disclosure buttons retain the existing navigation design.
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileMenuBtn && navLinks) {
        const mobileQuery = window.matchMedia('(max-width: 1286px)');
        const dropdowns = Array.from(navLinks.querySelectorAll('.nav-dropdown'));
        const setDropdown = (item, open) => {
            item.classList.toggle('open', open);
            item.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', String(open));
        };
        const closeMenu = (restoreFocus = false) => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.setAttribute('aria-label', 'Open menu');
            dropdowns.forEach(item => setDropdown(item, false));
            if (restoreFocus) mobileMenuBtn.focus();
        };
        mobileMenuBtn.addEventListener('click', () => {
            const open = !navLinks.classList.contains('active');
            navLinks.classList.toggle('active', open);
            mobileMenuBtn.classList.toggle('active', open);
            mobileMenuBtn.setAttribute('aria-expanded', String(open));
            mobileMenuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
            if (open) navLinks.querySelector('a, button').focus();
            else closeMenu();
        });
        dropdowns.forEach(item => {
            const toggle = item.querySelector('.nav-dropdown-toggle');
            if (!toggle) return;
            toggle.addEventListener('click', () => setDropdown(item, !item.classList.contains('open')));
            toggle.addEventListener('keydown', event => {
                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    setDropdown(item, true);
                    item.querySelector('.dropdown-menu a').focus();
                }
            });
            item.addEventListener('mouseenter', () => { if (!mobileQuery.matches) setDropdown(item, true); });
            item.addEventListener('mouseleave', () => {
                if (!mobileQuery.matches && !item.contains(document.activeElement)) setDropdown(item, false);
            });
            item.addEventListener('focusout', event => {
                if (!item.contains(event.relatedTarget)) setDropdown(item, false);
            });
            item.addEventListener('keydown', event => {
                if (event.key === 'Escape' && item.classList.contains('open')) {
                    event.preventDefault();
                    event.stopPropagation();
                    setDropdown(item, false);
                    toggle.focus();
                }
            });
        });
        navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && navLinks.classList.contains('active')) {
                event.preventDefault();
                closeMenu(true);
            }
        });
        document.addEventListener('focusin', event => {
            if (mobileQuery.matches && navLinks.classList.contains('active') && !navLinks.contains(event.target) && event.target !== mobileMenuBtn) closeMenu();
        });
        mobileQuery.addEventListener('change', () => closeMenu());
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && !e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
                const targetElement = document.getElementById(decodeURIComponent(targetId.slice(1)));
                if (targetElement) {
                    e.preventDefault();
                    if (!targetElement.hasAttribute('tabindex')) targetElement.setAttribute('tabindex', '-1');
                    targetElement.focus({preventScroll: true});
                    const fixedHeader = document.querySelector('.main-header');
                    const headerHeight = fixedHeader ? fixedHeader.getBoundingClientRect().height : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
                    history.pushState(null, '', targetId);
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: (window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.hasAttribute('data-motion-paused')) ? 'auto' : 'smooth'
                    });
                }
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.backgroundColor = 'var(--color-black)';
        }

        lastScroll = currentScroll;
    });

    // Phone number formatting
    const phoneInput = document.querySelector('input[name="phone"]');

    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove all non-numeric characters
            let value = e.target.value.replace(/\D/g, '');

            // Limit to 10 digits
            value = value.substring(0, 10);

            // Format the number
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = '(' + value;
                } else if (value.length <= 6) {
                    value = '(' + value.substring(0, 3) + ') ' + value.substring(3);
                } else {
                    value = '(' + value.substring(0, 3) + ') ' + value.substring(3, 6) + '-' + value.substring(6);
                }
            }

            e.target.value = value;
        });
    }

    // Floating CTA — acts as a call button on mobile, same as the CALL US button
    const floatingCta = document.querySelector('.floating-cta');

    if (floatingCta) {
        const fabText = floatingCta.querySelector('span');
        const desktopHref = 'https://rvlitigation.com/contact-rv-litigation';
        const desktopLabel = 'CONTACT A LAWYER';
        const mobileHref = 'tel:+14157977591';
        const mobileLabel = 'CALL US';

        const updateFloatingCta = function() {
            const isMobile = window.innerWidth <= 1286;
            floatingCta.setAttribute('href', isMobile ? mobileHref : desktopHref);
            floatingCta.setAttribute('aria-label', isMobile ? 'Call us' : 'Contact a lawyer');
            if (fabText) fabText.textContent = isMobile ? mobileLabel : desktopLabel;
        };

        updateFloatingCta();
        window.addEventListener('resize', updateFloatingCta);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    if (!(window.matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.hasAttribute('data-motion-paused'))) document.querySelectorAll('.practice-card, .commitments-list li, .attorney-card, .value-item, .practice-detail-card').forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
