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

    // Offers page
    const offerPrices = document.querySelectorAll('.offers-flex__box__prices');
    if (offerPrices.length > 0) {
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

      // Popular rooms
      // const slides = document.querySelectorAll('.popular-rooms .swiper-slide');
      // slides.forEach((e) => {
      //   e.classList.remove('swiper-slide')
      // });

      const popularRoomsFlex = document.querySelector('.popular-rooms .swiper-wrapper');
      popularRoomsFlex.classList.add('popular-rooms__flex');
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