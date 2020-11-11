const menuButton = document.querySelector('.menu-btn')
const navBar = document.querySelector('.navbar')
const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3')

menuButton.addEventListener('click', () => {
  navBar.classList.toggle('open')
  bar1.classList.toggle('rotate')
  bar2.classList.toggle('rotate')
  bar3.classList.toggle('rotate')
})

// If you're reading this, I realize that there is an easier way to do this but I'm so tired now, and this works, so I'll get back to it later
