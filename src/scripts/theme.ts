const STORAGE_KEY = 'theme';

export type Theme = 'light' | 'dark';

export function getSystemTheme(): Theme {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getStoredTheme(): Theme | null {
	const value = localStorage.getItem(STORAGE_KEY);
	if (value === 'light' || value === 'dark') return value;
	return null;
}

export function getActiveTheme(): Theme {
	return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
	document.documentElement.dataset.theme = theme;
	document.documentElement.style.colorScheme = theme;
}

export function setTheme(theme: Theme, persist = true) {
	applyTheme(theme);
	if (persist) localStorage.setItem(STORAGE_KEY, theme);
}

export function initThemeToggle() {
	const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
	if (!toggle) return;

	const syncToggle = () => {
		const isDark = document.documentElement.dataset.theme === 'dark';
		toggle.setAttribute('aria-pressed', String(isDark));
		toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
	};

	syncToggle();

	toggle.addEventListener('click', () => {
		const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
		setTheme(next);
		syncToggle();
	});

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
		if (getStoredTheme()) return;
		applyTheme(event.matches ? 'dark' : 'light');
		syncToggle();
	});
}
