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

    // Home
    if (window.location.pathname.split('/').pop() === 'index.html' || window.location.pathname.split('/').pop() === '') {

      const aboutus = document.querySelector('.aboutus');
      const aboutusFirstCol = document.querySelector('.aboutus__first-col__first-col');
      const aboutusSecondCol = document.querySelector('.aboutus__first-col__second-col');
      const aboutusMain = document.querySelector('.aboutus__main');
      const cloneAboutusMain = aboutusMain.cloneNode(true);
      aboutusMain.classList.add('d-none-desktop');
      cloneAboutusMain.classList.add('only-desktop');
      aboutus.appendChild(cloneAboutusMain);

      const aboutusImg1 = document.createElement('img');
      aboutusImg1.classList.add('aboutus__desktop-img', 'only-desktop');
      aboutusImg1.src = 'resources/img/unsplash-1.jpg';
      const aboutusImg2 = document.createElement('img');
      aboutusImg2.classList.add('aboutus__desktop-img', 'only-desktop');
      aboutusImg2.src = 'resources/img/luxury-room.jpg';
      
      aboutusFirstCol.appendChild(aboutusImg1);
      aboutusSecondCol.insertAdjacentElement('afterbegin', aboutusImg2);

      const video = document.querySelector('.intro-video__video');
      const cloneVideo = video.cloneNode(true);
      video.classList.add('d-none-desktop');
      cloneVideo.classList.add('only-desktop');

      document.querySelector('.intro-video').appendChild(cloneVideo);

      const facilities = document.querySelector('.facilities');
      const facilitiesFlex = document.createElement('div');
      facilitiesFlex.classList.add('facilities__flex', 'only-desktop');
      const cards = document.querySelectorAll('.facilities__swiper__slide');
      cards.forEach((e) => {
        const clone = e.cloneNode(true);
        clone.classList.remove('swiper-slide');
        facilitiesFlex.appendChild(clone);
      })
      facilities.appendChild(facilitiesFlex);

      const menuButtons = document.querySelector('.menu-section__menu__pagination');
      const cloneMenuButtons = menuButtons.cloneNode(true);
      menuButtons.classList.add('d-none-desktop');
      cloneMenuButtons.classList.add('only-desktop');

      document.querySelector('.menu-section__head').appendChild(cloneMenuButtons);

      const menuOfMenu = document.querySelector('.menu-section__menu');
      const secondCol = document.createElement('div');
      secondCol.classList.add('menu-section__menu__second-col', 'only-desktop');
      const option = document.querySelector('.menu-section__menu__option');
      const clonedOption1 = option.cloneNode(true);
      const clonedOption2 = option.cloneNode(true);
      const clonedOption3 = option.cloneNode(true);
      clonedOption1.children[0].src = 'resources/img/fruit.jpg';
      clonedOption1.children[1].children[0].innerHTML = 'Fruit Parfait';
      clonedOption2.children[0].src = 'resources/img/marmalade.jpg';
      clonedOption2.children[1].children[0].innerHTML = 'Marmalade Selection';
      clonedOption3.children[0].src = 'resources/img/cheese.jpg';
      clonedOption3.children[1].children[0].innerHTML = 'Cheese Plate';
      secondCol.appendChild(clonedOption1);
      secondCol.appendChild(clonedOption2);
      secondCol.appendChild(clonedOption3);
      menuOfMenu.appendChild(secondCol);

      document.querySelector('.menu-section__bottom-slider').classList.add('d-none-desktop');
      const menuBottomDesktop = document.createElement('div');
      menuBottomDesktop.classList.add('menu-section__bottom-desktop', 'only-desktop');
      const menuImg1 = document.createElement('img');
      const menuImg2 = document.createElement('img');
      const menuImg3 = document.createElement('img');
      menuImg1.src = 'resources/img/menu-1.jpg';
      menuImg2.src = 'resources/img/menu-2.jpg';
      menuImg3.src = 'resources/img/menu-3.jpg';
      menuBottomDesktop.appendChild(menuImg1);
      menuBottomDesktop.appendChild(menuImg2);
      menuBottomDesktop.appendChild(menuImg3);
      document.querySelector('.menu-section').appendChild(menuBottomDesktop);
    }

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

    // Room details
    if (window.location.pathname.split('/').pop() === 'room_details.html') {
      const offer = document.querySelector('.offer');
      const offerForm = document.querySelector('.offer__form');
      const cloneOfferForm = offerForm.cloneNode(true);
      offerForm.classList.add('d-none-desktop');
      cloneOfferForm.classList.add('offer__right-col', 'only-desktop');
      offer.appendChild(cloneOfferForm);
      
      const relatedRooms = document.querySelector('.related-rooms');
      const relatedRoomsFlex = document.createElement('div');
      relatedRoomsFlex.classList.add('related-rooms__flex', 'only-desktop');
      const cards = document.querySelectorAll('.rooms-flex__box');
      cards.forEach((e) => {
        const clone = e.cloneNode(true);
        clone.classList.remove('swiper-slide');
        relatedRoomsFlex.appendChild(clone);
      })
      relatedRooms.appendChild(relatedRoomsFlex);
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