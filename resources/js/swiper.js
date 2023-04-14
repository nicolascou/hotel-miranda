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

new Swiper('.rooms__swiper-desktop', {
  direction: 'horizontal',
  autoplay: {
    delay: 5000
  },
  loop: true,
  navigation: {
    prevEl: '.rooms__swiper__prev-btn',
    nextEl: '.rooms__swiper__next-btn',
  },
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 20,
});

new Swiper('.facilities__swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

new Swiper('.menu-section__bottom-slider', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true,
  autoplay: {
    delay: 2000
  },
})

new Swiper('.counter__bottom-slider', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true,
  autoplay: {
    delay: 2000
  },
})

new Swiper('.related-rooms__swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    prevEl: '.related-rooms__prev-btn',
    nextEl: '.related-rooms__next-btn',
  },
})