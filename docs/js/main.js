'use strict';

// console.log('Test - main.js');
$(document).ready(function () {
  // set slider setting
  $('.slider').slick({
    dots: true,
    slidesToShow: 3,
    // speed: 300,
    // autoplay: false,
    // autoplaySpeed: 3000,
    centerMode: true,
    variableWidth: true,
    // slidesPerRow: 3,
    appendArrows: $('.slider__bottom'),
    appendDots: $('.slider__bottom')
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {}
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {}
    //   },
    // ],
  });

  // table
  setTableProperty();

  // ---------- dl ----------
  setDlProperty();
  function setDlProperty() {
    $('.how__dt').click(toggleDlClass);
  }
  function toggleDlClass(event) {
    $('.how__dd').each(function (index, elem) {
      if (elem === event.target.nextElementSibling) {
        return;
      }
      elem.classList.remove('how__dd_open');
    });
    event.target.nextElementSibling.classList.toggle('how__dd_open');
  }
});

// ---------- table ----------

var startCoordX = undefined;

// set attribute & events
function setTableProperty() {
  $('.table__cell').each(function (index) {
    if (index % 4 === 0) {
      return;
    }
    $(this).attr('data-col', index % 4);
  }).on({
    'mouseenter': addTableClass,
    'mouseleave': deleteTableClass
    // 'mousedown': setTrue,
    // 'mouseup': setFalse,
    // 'mousemove': swipeTable,
  });
}
// add class 'table__hover'
function addTableClass(event) {
  var prevIndex = event.relatedTarget.hasAttribute('data-col') ? event.relatedTarget.getAttribute('data-col') : '-1';
  var currentIndex = event.target.hasAttribute('data-col') ? event.target.getAttribute('data-col') : '-1';
  if (currentIndex === prevIndex) {
    return;
  }
  $("[data-col=\"".concat(currentIndex, "\"]")).addClass('table__hover');
}
// delete class 'table__hover'
function deleteTableClass(event) {
  var nextIndex = event.relatedTarget.hasAttribute('data-col') ? event.relatedTarget.getAttribute('data-col') : '-1';
  var currentIndex = event.target.hasAttribute('data-col') ? event.target.getAttribute('data-col') : '-1';
  if (currentIndex === nextIndex) {
    return;
  }
  $("[data-col=\"".concat(currentIndex, "\"]")).removeClass('table__hover');
}

// function setTrue(event) {
//   startCoordX = event.screenX;
//   // console.log(startCoordX);
//   // console.log(event.screenX);
// }

// function setFalse() {
//   startCoordX = undefined;
//   // console.log(startCoordX);
// }

// function swipeTable(event) {
//   // console.log('swipeTable');
//   if(startCoordX) {
//     // console.log(event);
//     let currentPosition = $('.table').scrollLeft();
//     // let currenElement = event.target;
//     let currentWidth = 213;
//     // console.log(currentPosition);
//     if(event.screenX < startCoordX) {
//       $('.table').scrollLeft(currentPosition + 213);
//     } else {
//       $('.table').scrollLeft(currentPosition - 213);
//     }
//   }
// }
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

// ---------- close detailes -----------

document.body.onclick = function (event) {
  document.body.querySelectorAll('details[open]').forEach(function (elem) {
    if (elem === event.target.parentNode) {
      return;
    }
    elem.open = false;
  });
};