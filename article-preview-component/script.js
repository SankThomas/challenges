const share = document.querySelector('.fa-share')
const tooltip = document.querySelector('.tooltip-inner')
const caret = document.querySelector('.fa-caret-down')

share.addEventListener('click', () => {
  if (tooltip.style.display === 'block') {
    tooltip.style.display = 'none'
  } else {
    tooltip.style.display = 'block'
  }
})
