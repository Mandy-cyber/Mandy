// VERTICAL COMIC CAROUSEL
// --------------------------------------------------------------------

export function scrollCarousel(direction: number): void {
  const container = document.querySelector('.carousel') as HTMLElement;
  if (!container) return;

  const scrollAmount = container.offsetWidth * direction;
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

(window as any).scrollCarousel = scrollCarousel;
