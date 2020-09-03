const navBar = document.getElementById('mainList')
const menuBar = document.getElementById('menuBar')

menuBar.addEventListener('click', (openMenu) => {
  if (navBar.style.display === 'block') {
    navBar.style.display = 'none'
  } else {
    navBar.style.display = 'block'
  }
})
