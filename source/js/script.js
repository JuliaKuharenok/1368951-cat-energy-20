var navigation = document.querySelector('.navigation');
var navigationToggle = document.querySelector('.navigation__toggle');

var buttonBefore = document.querySelector('.slider__button--before');
var buttonAfter = document.querySelector('.slider__button--after');
var imageBefore = document.querySelector('.slider__item--before');
var imageAfter = document.querySelector('.slider__item--after');

navigation.classList.remove('navigation--nojs');

navigationToggle.addEventListener('click', function() {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});

buttonAfter.addEventListener('click', function() {
  imageBefore.classList.add('visually-hidden');
  imageAfter.classList.remove('visually-hidden');
});

buttonBefore.addEventListener('click', function() {
  imageAfter.classList.add('visually-hidden');
  imageBefore.classList.remove('visually-hidden');
});
