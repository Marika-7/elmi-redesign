// console.log('Test - test.js');

// ---------- nav - set active link -----------

const navLinks = document.querySelectorAll('.nav__link');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = setActiveLink;
}

function setActiveLink(event) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('nav__active');
  }
  for (let i = 0; i < submenu.length; i++) {
    submenu[i].classList.remove('submenu__active');
  }
  let elem = event.target;
  while(!elem.classList.contains('nav__link')) {
    elem = elem.parentNode;
  }
  elem.classList.add('nav__active');
}

// ---------- nav - set active submenu link  -----------

const submenu = document.querySelectorAll('.submenu__link');
for (let i = 0; i < submenu.length; i++) {
  submenu[i].onclick = setActiveSubmenuLink;
}

function setActiveSubmenuLink(event) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('nav__active');
  }
  for (let i = 0; i < submenu.length; i++) {
    submenu[i].classList.remove('submenu__active');
  }
  let elem = event.target;
  while(!elem.classList.contains('submenu__link')) {
    elem = elem.parentNode;
  }
  elem.classList.add('submenu__active');
  elem.parentNode.parentNode.previousElementSibling.classList.add('nav__active');
}

// ---------- open language menu -----------

document.getElementById('lang-header').onclick = () => toggleMenu('lang-header-menu');

document.getElementById('lang-footer').onclick = () => toggleMenu('lang-footer-menu');

document.getElementById('lang-header-menu').onclick = () => toggleMenu('lang-header-menu');

document.getElementById('lang-footer-menu').onclick = () => toggleMenu('lang-footer-menu');

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
  const menu = document.getElementById(name);
  menu.classList.toggle('menu_hide');
  menu.classList.toggle('menu_show');
}

// ---------- Оставить заявку -----------

document.getElementById('application').onclick = () => {
  console.log('Оставить заявку');
}

// ---------- check input -----------

document.getElementById('name').onblur = (event) => {
  if(event.target.value) {
    event.target.classList.add('input_success');
    event.target.classList.remove('input_error');
  } else {
    event.target.classList.add('input_error');
    event.target.classList.remove('input_success');
  }
}
