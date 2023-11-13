let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
  //Checks which photo is to be shown
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  //Removes the "old" picture shown, disables the indicator
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    indicators[i].style.opacity = 0.5;
  }

  //Shows the current photo and indicator
  slides[slideIndex].style.display = 'block';
  indicators[slideIndex].style.opacity = 1;

  //Transforms the current position into the new one when changing the 'active' photo
  posLeft(transformIndex(slideIndex - 1));
  posRight(transformIndex(slideIndex + 1));
  posMiddle(slideIndex);
  
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


//pressing the indicators will swap to that picture
function currentSlide(n){
  showSlide(n)
}


//Displays the middle photo, considered the current photo
function posMiddle(slide){
  slides[slide].style.transform = 'scale(1)';
  slides[slide].style.marginLeft = '35vw';
  slides[slide].style.display = 'inline-block';
  slides[slide].style.position = 'absolute';
  slides[slide].style.zIndex = '2';
}

//Left picture, slightly hidden behind the middle photo, uses CSS in JS to change the properties like position and size
function posLeft(slide){
  slides[slide].style.transform = 'scale(0.75)';
  slides[slide].style.marginLeft = '30vw';
  slides[slide].style.display = 'inline-block';
  slides[slide].style.position = 'absolute';
  slides[slide].style.zIndex = '1';
}

//Right picture, slightly hidden behind the middle photo, uses CSS in JS to change the properties like position and size
function posRight(slide){
  slides[slide].style.transform = 'scale(0.75)';
  slides[slide].style.marginLeft = '40vw';
  slides[slide].style.display = 'inline-block';
  slides[slide].style.position = 'absolute';
  slides[slide].style.zIndex = '1';
}


function transformIndex(n){
  if (n < 0) {
    return slides.length - 1;
  } else if (n >= slides.length) {
    return 0;
  } else {
    return n;
  }
}
