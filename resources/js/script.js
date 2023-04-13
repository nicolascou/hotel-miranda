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

    // Offers
    const offer = document.querySelector('.offers-flex__box__prices');
    if (offer) {
      offer.classList.add('d-none');
      const offerCard = document.querySelector('.offers-flex__box__card');
      const clonedOffer = offer.cloneNode(true);
      offerCard.appendChild(clonedOffer);
      clonedOffer.classList.remove('d-none');
      clonedOffer.classList.add('only-desktop');
    }

  } else {
    if (!e) return;
    const removeItems = document.querySelectorAll('.only-desktop');
    removeItems.forEach((e) => e.remove());
    
    const offer = document.querySelector('.offers-flex__box__prices.d-none');
    offer.classList.remove('d-none');
  }
}

changeView();