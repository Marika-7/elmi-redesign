'use strict';
// console.log('Test - main.js');

$(document).ready(function(){
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
});
