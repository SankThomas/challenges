const menuButton = document.querySelector('.nav-button');
const navBg = document.querySelector('.nav-bg');
const navBar = document.querySelector('.navbar');

menuButton.addEventListener('click', showNav);

function showNav() {
  if (navBar.style.display === 'block') {
    navBar.style.display = 'none';
  } else {
    navBar.style.display = 'block';
  }
}
