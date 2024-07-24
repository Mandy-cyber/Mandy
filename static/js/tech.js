// MARKDOWN SECTION
// --------------------------------------------------------------------
var educationCode = document.getElementById('education-code')
var previewButton = document.getElementById('preview-button');
var rawButton = document.getElementById('raw-button');
var zeroMdElement = document.querySelector('zero-md');

document.addEventListener('DOMContentLoaded', function() {

    previewButton.addEventListener('click', function() {
        educationCode.style.display = 'none';
        previewButton.style.display = 'none';
        rawButton.style.display = 'flex';
        zeroMdElement.style.display = 'flex';
    });

    rawButton.addEventListener('click', function() {
        educationCode.style.display = 'flex';
        previewButton.style.display = 'flex';
        rawButton.style.display = 'none';
        zeroMdElement.style.display = 'none';
    });
});


// PROJECT SLIDESHOW
// --------------------------------------------------------------------
// adjusted from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
let slideIndex = 1;
showSlides(slideIndex);
var slideInterval;
slideInterval = setInterval(autoSlide, 5000);

function autoSlide() {
  showSlides(slideIndex += 1);
}

function moveSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// stop autoscroll when arrows are used
var nextBtn = document.getElementById("next")
var prevBtn = document.getElementById("prev")
document.addEventListener('DOMContentLoaded', function() {
    nextBtn.addEventListener('click', function() {
        clearInterval(slideInterval)
    });
    prevBtn.addEventListener('click', function() {
        clearInterval(slideInterval)
    });
});