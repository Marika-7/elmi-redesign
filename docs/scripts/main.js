'use strict';

// console.log('Test - main.js');
"use strict";

// console.log('Test - test.js');

// ---------- nav - set active link -----------
// for test; delete for wordpress

var navLinks = document.querySelectorAll('.menu-item');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = setActiveLink;
}
function setActiveLink(event) {
  for (var _i = 0; _i < navLinks.length; _i++) {
    navLinks[_i].classList.remove('current_page_item');
  }
  var elem = event.target;
  while (!elem.classList.contains('menu-item')) {
    elem = elem.parentNode;
  }
  elem.classList.add('current_page_item');
}

// ---------- open language menu -----------

document.getElementById('lang-header').onclick = function () {
  return toggleMenu('lang-header-menu');
};
document.getElementById('lang-header').onblur = function () {
  return toggleMenu('lang-header-menu');
};
document.getElementById('lang-footer').onclick = function () {
  return toggleMenu('lang-footer-menu');
};
document.getElementById('lang-footer').onblur = function () {
  return toggleMenu('lang-footer-menu');
};

// document.getElementById('lang-header-menu').onclick = () => toggleMenu('lang-header-menu');

// document.getElementById('lang-footer-menu').onclick = () => toggleMenu('lang-footer-menu');

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

var form_footer = document.forms.footer;
for (var _i2 = 0; _i2 < form_footer.length; _i2++) {
  if (form_footer[_i2].name !== 'phone') {
    form_footer[_i2].onblur = checkInput;
  }
}
function checkInput(event) {
  if (event.target.value) {
    event.target.classList.add('input_success');
    event.target.classList.remove('input_error');
  } else {
    event.target.classList.add('input_error');
    event.target.classList.remove('input_success');
  }
}