window.onload = move

let i = 0

function move() {
  if (i == 0) {
    i = 1
    let elem = document.getElementById('progress')

    let width = 1
    let id = setInterval(frame, 10)

    function frame() {
      if (width >= 70) {
        clearInterval(id)
        i = 0
      } else {
        width++
        elem.style.width = width + '%'
      }
    }
  }
}
