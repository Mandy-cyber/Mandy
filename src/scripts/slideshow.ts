// PROJECT SLIDESHOW
// --------------------------------------------------------------------
// Slideshow functionality for projects

let slideIndex = 1;
let slideInterval: number | undefined;

export function initSlideshow(): void {
  showSlides(slideIndex);
  slideInterval = window.setInterval(autoSlide, 5000);

  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      clearInterval(slideInterval);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      clearInterval(slideInterval);
    });
  }

  // arrow key navigation
  const handleKeydown = function(event: KeyboardEvent) {
    const slides = document.getElementsByClassName("slides");
    if (slides.length === 0) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      clearInterval(slideInterval);
      (window as any).moveSlides(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      clearInterval(slideInterval);
      (window as any).moveSlides(1);
    }
  };

  document.addEventListener('keydown', handleKeydown);
}

function autoSlide(): void {
  showSlides(slideIndex += 1);
}

// make available globally
(window as any).moveSlides = function(n: number): void {
  showSlides(slideIndex += n);
};

(window as any).currentSlide = function(n: number): void {
  showSlides(slideIndex = n);
};

function showSlides(n: number): void {
  let i: number;
  const slides = document.getElementsByClassName("slides") as HTMLCollectionOf<HTMLElement>;
  const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}
