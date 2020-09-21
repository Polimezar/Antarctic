'use strict';

var navToggle = document.querySelector('.page-header__toggle');
var nav = document.querySelector('.nav');

nav.classList.remove('nav--no-js');
navToggle.classList.remove('page-header__toggle--no-js');

navToggle.addEventListener('click', function () {
  navToggle.classList.toggle('page-header__toggle--close');
  nav.classList.toggle('nav--open');
});
