// console.log('Test - test.js');

// ---------- nav - set active link -----------
// for test; delete for wordpress

const navLinks = document.querySelectorAll('.menu-item');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = setActiveLink;
}

function setActiveLink(event) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('current_page_item');
  }
  let elem = event.target;
  while(!elem.classList.contains('menu-item')) {
    elem = elem.parentNode;
  }
  elem.classList.add('current_page_item');
}

// ---------- open language menu -----------

document.getElementById('lang-header').onclick = () => toggleMenu('lang-header-menu');
document.getElementById('lang-header').onblur = () => toggleMenu('lang-header-menu');

document.getElementById('lang-footer').onclick = () => toggleMenu('lang-footer-menu');
document.getElementById('lang-footer').onblur = () => toggleMenu('lang-footer-menu');

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
  const menu = document.getElementById(name);
  menu.classList.toggle('menu_hide');
  menu.classList.toggle('menu_show');
}

// ---------- Оставить заявку -----------

document.getElementById('application').onclick = () => {
  console.log('Оставить заявку');
}

// ---------- check input -----------

let form_footer = document.forms.footer;

for(let i=0; i<form_footer.length; i++) {
  if(form_footer[i].name !== 'phone') {
    form_footer[i].onblur = checkInput;
  }
}

function checkInput(event) {
  if(event.target.value) {
    event.target.classList.add('input_success');
    event.target.classList.remove('input_error');
  } else {
    event.target.classList.add('input_error');
    event.target.classList.remove('input_success');
  }
}
