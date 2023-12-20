'use strict';
// console.log('Test - main.js');

$(document).ready(function(){
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
    appendDots: $('.slider__bottom'),
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
    $('.how__dd').each(function(index, elem) {
      if(elem === event.target.nextElementSibling) {
        return;
      }
      elem.classList.remove('how__dd_open');
    });
    event.target.nextElementSibling.classList.toggle('how__dd_open');
  }
});

// ---------- table ----------

let startCoordX = undefined;

// set attribute & events
function setTableProperty() {
  $('.table__cell')
    .each(function(index) {
      if(index%4 === 0) {
        return;
      }
      $(this).attr('data-col', index%4);
    }).on({
      'mouseenter': addTableClass,
      'mouseleave': deleteTableClass,
      // 'mousedown': setTrue,
      // 'mouseup': setFalse,
      // 'mousemove': swipeTable,
    });
}
// add class 'table__hover'
function addTableClass (event) {
  let prevIndex = event.relatedTarget.hasAttribute('data-col') 
    ? event.relatedTarget.getAttribute('data-col') 
    : '-1';
  let currentIndex = event.target.hasAttribute('data-col') 
    ? event.target.getAttribute('data-col') 
    : '-1';
  if(currentIndex === prevIndex) {
    return;
  }
  $(`[data-col="${currentIndex}"]`).addClass('table__hover');
}
// delete class 'table__hover'
function deleteTableClass (event) {
  let nextIndex = event.relatedTarget.hasAttribute('data-col') 
    ? event.relatedTarget.getAttribute('data-col') 
    : '-1';
  let currentIndex = event.target.hasAttribute('data-col') 
    ? event.target.getAttribute('data-col') 
    : '-1';
    if(currentIndex === nextIndex) {
      return;
    }
  $(`[data-col="${currentIndex}"]`).removeClass('table__hover');
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
