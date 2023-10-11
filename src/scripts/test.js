'use strict';
console.log('Test - test.js');

// show language menu

document.getElementById('lang-footer').onclick = () => toggleMenu('lang-footer-menu')

document.getElementById('lang-header').onclick = () => toggleMenu('lang-header-menu')

// function showMenu(event) {
//   menu.classList.remove('menu_hide');
//   menu.classList.add('menu_show');
// }

// function hideMenu(event) {
//   menu.classList.remove('menu_show');
//   menu.classList.add('menu_hide');
// }

function toggleMenu(name) {
  const menu = document.getElementById(name);
  menu.classList.toggle('menu_hide');
  menu.classList.toggle('menu_show');
}

// check input

const userName = document.getElementById('name');
userName.onblur = () => {
  if(userName.value) {
    userName.classList.add('input_success');
    userName.classList.remove('input_error');
  } else {
    userName.classList.add('input_error');
    userName.classList.remove('input_success');
  }
}
