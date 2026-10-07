export function initMobileNav() {
	const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
	const panel = document.querySelector<HTMLElement>('[data-nav-panel]');
	if (!toggle || !panel) return;

	const close = () => {
		toggle.setAttribute('aria-expanded', 'false');
		panel.hidden = true;
		document.body.classList.remove('nav-open');
	};

	const open = () => {
		toggle.setAttribute('aria-expanded', 'true');
		panel.hidden = false;
		document.body.classList.add('nav-open');
	};

	toggle.addEventListener('click', () => {
		const expanded = toggle.getAttribute('aria-expanded') === 'true';
		if (expanded) close();
		else open();
	});

	panel.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', close);
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') close();
	});
}
