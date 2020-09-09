// Get the menu button
// Get the navbar
// Add an event listener to the menu button to show/hide the navbar list when clicked
// Create the function for the event listener
// Display the close svg icon when the navbar is shown

const menuButton = document.querySelector('.menu-button')
const navBar = document.querySelector('.nav')

menuButton.addEventListener('click', showMenu)

function showMenu() {
  if (navBar.style.display === 'block') {
    navBar.style.display = 'none'
  } else {
    navBar.style.display = ' block'
  }
}
