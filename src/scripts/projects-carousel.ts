export function initProjectsCarousel() {
	const root = document.querySelector<HTMLElement>('[data-projects-carousel]');
	if (!root) return;

	const track = root.querySelector<HTMLElement>('[data-carousel-track]');
	const prev = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
	const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
	const counter = root.querySelector<HTMLElement>('[data-carousel-counter]');
	const slides = root.querySelectorAll<HTMLElement>('[data-carousel-slide]');

	if (!track || !prev || !next || !counter || slides.length === 0) return;

	let index = 0;
	const total = slides.length;

	const update = () => {
		track.style.transform = `translateX(-${index * 100}%)`;
		counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
		prev.disabled = index === 0;
		next.disabled = index === total - 1;
	};

	prev.addEventListener('click', () => {
		if (index > 0) {
			index -= 1;
			update();
		}
	});

	next.addEventListener('click', () => {
		if (index < total - 1) {
			index += 1;
			update();
		}
	});

	update();
}
