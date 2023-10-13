'use strict';

// console.log('Test - main.js');
"use strict";

// console.log('Test - test.js');

// ---------- nav - set active link -----------

var navLinks = document.querySelectorAll('.nav__link');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = setActiveLink;
}
function setActiveLink(event) {
  for (var _i = 0; _i < navLinks.length; _i++) {
    navLinks[_i].classList.remove('nav__active');
  }
  for (var _i2 = 0; _i2 < submenu.length; _i2++) {
    submenu[_i2].classList.remove('submenu__active');
  }
  var elem = event.target;
  while (!elem.classList.contains('nav__link')) {
    elem = elem.parentNode;
  }
  elem.classList.add('nav__active');
}

// ---------- nav - set active submenu link  -----------

var submenu = document.querySelectorAll('.submenu__link');
for (var _i3 = 0; _i3 < submenu.length; _i3++) {
  submenu[_i3].onclick = setActiveSubmenuLink;
}
function setActiveSubmenuLink(event) {
  for (var _i4 = 0; _i4 < navLinks.length; _i4++) {
    navLinks[_i4].classList.remove('nav__active');
  }
  for (var _i5 = 0; _i5 < submenu.length; _i5++) {
    submenu[_i5].classList.remove('submenu__active');
  }
  var elem = event.target;
  while (!elem.classList.contains('submenu__link')) {
    elem = elem.parentNode;
  }
  elem.classList.add('submenu__active');
  elem.parentNode.parentNode.previousElementSibling.classList.add('nav__active');
}

// ---------- open language menu -----------

document.getElementById('lang-header').onclick = function () {
  return toggleMenu('lang-header-menu');
};
document.getElementById('lang-footer').onclick = function () {
  return toggleMenu('lang-footer-menu');
};
document.getElementById('lang-header-menu').onclick = function () {
  return toggleMenu('lang-header-menu');
};
document.getElementById('lang-footer-menu').onclick = function () {
  return toggleMenu('lang-footer-menu');
};

// function openMenu(name) {
// const menu = document.getElementById(name);
//   menu.classList.remove('menu_hide');
//   menu.classList.add('menu_show');
// }

// function closeMenu(name) {
//   const menu = document.getElementById(name);
//   menu.classList.remove('menu_show');
//   menu.classList.add('menu_hide');
// }

function toggleMenu(name) {
  var menu = document.getElementById(name);
  menu.classList.toggle('menu_hide');
  menu.classList.toggle('menu_show');
}

// ---------- Оставить заявку -----------

document.getElementById('application').onclick = function () {
  console.log('Оставить заявку');
};

// ---------- check input -----------

document.getElementById('name').onblur = function (event) {
  if (event.target.value) {
    event.target.classList.add('input_success');
    event.target.classList.remove('input_error');
  } else {
    event.target.classList.add('input_error');
    event.target.classList.remove('input_success');
  }
};