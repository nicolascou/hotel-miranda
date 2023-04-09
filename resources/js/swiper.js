import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

new Swiper('.rooms__swiper', {
  direction: 'horizontal',
  autoplay: {
    delay: 5000
  },
  loop: true,
  navigation: {
    prevEl: '.rooms__swiper__prev-btn',
    nextEl: '.rooms__swiper__next-btn',
  },
});

new Swiper('.facilities__swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination'
  }
});