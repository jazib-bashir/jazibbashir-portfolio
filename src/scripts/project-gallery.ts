export function initProjectGallery() {
	const root = document.querySelector<HTMLElement>('[data-project-gallery]');
	if (!root) return;

	const slides = root.querySelectorAll<HTMLElement>('[data-gallery-slide]');
	const thumbs = root.querySelectorAll<HTMLButtonElement>('[data-gallery-thumb]');
	const prev = root.querySelector<HTMLButtonElement>('[data-gallery-prev]');
	const next = root.querySelector<HTMLButtonElement>('[data-gallery-next]');
	const counter = root.querySelector<HTMLElement>('[data-gallery-counter]');

	if (slides.length === 0) return;

	const total = slides.length;
	let index = 0;
	let hasInitialized = false;

	const pad = (n: number) => String(n).padStart(2, '0');

	const update = () => {
		slides.forEach((slide, i) => {
			const active = i === index;
			slide.classList.toggle('is-active', active);
			slide.toggleAttribute('hidden', !active);
			slide.setAttribute('aria-hidden', String(!active));
		});

		thumbs.forEach((thumb, i) => {
			const active = i === index;
			thumb.setAttribute('aria-selected', active ? 'true' : 'false');
			thumb.classList.toggle('is-active', active);
		});

		if (counter) counter.textContent = `${pad(index + 1)} / ${pad(total)}`;

		if (prev) prev.disabled = total <= 1;
		if (next) next.disabled = total <= 1;

		if (hasInitialized) {
			thumbs[index]?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
		}
		hasInitialized = true;
	};

	prev?.addEventListener('click', () => {
		index = (index - 1 + total) % total;
		update();
	});

	next?.addEventListener('click', () => {
		index = (index + 1) % total;
		update();
	});

	thumbs.forEach((thumb) => {
		thumb.addEventListener('click', () => {
			const target = Number(thumb.dataset.galleryThumb);
			if (!Number.isNaN(target)) {
				index = target;
				update();
			}
		});
	});

	update();
}
