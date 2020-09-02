const button = document.querySelector('.btn')
const exclamation = document.querySelector('.fa-exclamation-circle')
const smallText = document.querySelector('small')

window.addEventListener('load', () => {
  exclamation.style.display = 'none'
})

button.addEventListener('click', validate)

function validate() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) {
    return true
  }
}
