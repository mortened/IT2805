let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

//changes slide every 10 seconds automatically
setInterval(function () {
  plusSlides(1);
}, 10000);

//shows the first slide
showSlide(slideIndex);
