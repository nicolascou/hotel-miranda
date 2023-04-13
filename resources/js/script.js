// Handle hamburger button
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeMenu = document.getElementById('closeMenu');
const navbar = document.getElementById('navbar');

hamburgerBtn.addEventListener('click', function() {
  navbar.classList.remove('d-none');
  closeMenu.classList.remove('d-none');
  hamburgerBtn.classList.add('d-none');
})

closeMenu.addEventListener('click', function() {
  navbar.classList.add('d-none');
  closeMenu.classList.add('d-none');
  hamburgerBtn.classList.remove('d-none');
})

// Handle Desktop design
const media = matchMedia('(min-width: 1000px)');
media.addEventListener('change', changeView);

function changeView(e) {
  if (media.matches) { // Desktop styles
    
    // Header
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header-wrapper', 'only-desktop');

    const headerWrapperText = document.createElement('p');
    headerWrapperText.innerHTML = 'We make you Feel Comfortable';
    headerWrapperText.classList.add('header-wrapper__text');

    const headerDesktop = document.createElement('header');
    headerDesktop.classList.add('header-wrapper__header-desktop');
    
    const navbarDesktop = document.querySelector('.header__navbar').cloneNode(true);
    navbarDesktop.classList.remove('d-none');

    headerDesktop.appendChild(document.querySelector('.header__main').cloneNode(true));
    headerDesktop.appendChild(navbarDesktop);
    headerDesktop.appendChild(document.querySelector('.header__btns').cloneNode(true));
    
    headerWrapper.appendChild(headerWrapperText);
    headerWrapper.appendChild(headerDesktop);
    document.body.insertAdjacentElement('afterbegin', headerWrapper);

    // About Us
    if (window.location.pathname.split('/').pop() === 'about.html') {
      document.querySelector('.counter__bottom-slider').classList.add('d-none-desktop');
      const counterBottomDesktop = document.createElement('div');
      counterBottomDesktop.classList.add('counter__bottom-desktop', 'only-desktop');
      const counterImg1 = document.createElement('img');
      const counterImg2 = document.createElement('img');
      counterImg1.src = '../resources/img/counter-1.jpg';
      counterImg2.src = '../resources/img/counter-2.jpg';
      counterBottomDesktop.appendChild(counterImg1);
      counterBottomDesktop.appendChild(counterImg2);
  
      document.querySelector('.counter').appendChild(counterBottomDesktop);

      const facilities = document.querySelector('.facilities-black');
      const facilitiesFlex = document.createElement('div');
      facilitiesFlex.classList.add('facilities__flex', 'only-desktop');
      const cards = document.querySelectorAll('.facilities__swiper__slide');
      cards.forEach((e) => {
        const clone = e.cloneNode(true);
        clone.classList.remove('swiper-slide');
        facilitiesFlex.appendChild(clone);
      })
      facilities.appendChild(facilitiesFlex);
    }

    // Offers page
    if (window.location.pathname.split('/').pop() === 'offers.html') {
      const offerPrices = document.querySelectorAll('.offers-flex__box__prices');
      const offerNewParents = document.querySelectorAll('.offers-flex__box__first-row');
      
      const buttonsOffer = document.querySelectorAll('.offers-flex__box__btn');
      const secondRowFirstCols = document.querySelectorAll('.offers-flex__box__second-row__first-col');

      for (let i = 0; i < offerPrices.length; i++) {
        const clonedOffer = offerPrices[i].cloneNode(true);
        offerPrices[i].classList.add('d-none-desktop');
        clonedOffer.classList.add('only-desktop');
        offerNewParents[i].appendChild(clonedOffer);

        const clonedButtonBoxOffer = buttonsOffer[i].cloneNode(true);
        buttonsOffer[i].classList.add('d-none-desktop');
        clonedButtonBoxOffer.classList.add('only-desktop');
        secondRowFirstCols[i].appendChild(clonedButtonBoxOffer);
      }

      const popularRooms = document.querySelector('.popular-rooms');
      const popularRoomsFlex = document.createElement('div');
      popularRoomsFlex.classList.add('popular-rooms__flex', 'only-desktop');
      const cards = document.querySelectorAll('.rooms-flex__box');
      cards.forEach((e) => {
        const clone = e.cloneNode(true);
        clone.classList.remove('swiper-slide');
        popularRoomsFlex.appendChild(clone);
      })
      popularRooms.appendChild(popularRoomsFlex);
    }

  } else {
    if (!e) return;
    const removeItems = document.querySelectorAll('.only-desktop');
    removeItems.forEach((e) => e.remove());
    
    const showItems = document.querySelectorAll('.d-none-desktop');
    showItems.forEach((e) => e.classList.remove('d-none-desktop'));
  }
}

changeView();