const menuBar = document.querySelector('.menu-bar')
const navBar = document.querySelector('.main-navbar')

menuBar.addEventListener('click', openMenu)

function openMenu() {
  if (menuBar) {
    navBar.classList.toggle('show')
  }
}
