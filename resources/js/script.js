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


const desktopMediaQuery = window.matchMedia('(min-width: 1000px)');

function checkMedia() {
  if (desktopMediaQuery.matches) {
    console.log(desktopMediaQuery);
  }
}

window.addEventListener('resize', checkMedia);