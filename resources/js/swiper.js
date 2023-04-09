import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
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