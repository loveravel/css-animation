'use strict';

let numberSlide = 0;

const controls = document.querySelectorAll('.controls__item');
const slides = document.querySelectorAll('.slider__container');

slides.forEach((slide, index) => {
  if (index !== 0) {
    slide.classList.add('hidden');    
  }
}); 

controls.forEach((control) => {
  control.addEventListener('click', (evt) => {
    evt.preventDefault();
    slides[numberSlide].classList.add('hidden');
    control.classList.contains('controls__item--prev') ? numberSlide-- : numberSlide++; 
    slides[numberSlide].classList.remove('hidden');
  });
});
