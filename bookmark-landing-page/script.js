/*
Features



FAQs
1. Get the arrow image
2. Get the answer section
3. Add a click event to the arrow to show the answer when it is clicked

*/

// Get current class
const listItems = document.querySelectorAll(".list-item")
const current = document.querySelector(".current")

listItems.addEventListener("click", showCurrent)

function showCurrent() {
  if (current.style.display === "block") {
    listItems.style.color = "hsl(0, 94%, 66%)"
  }
}

// showCurrent()

// Get arrow icons
const arrowOne = document.querySelector(".show-one")
const arrowTwo = document.querySelector(".show-two")
const arrowThree = document.querySelector(".show-three")
const arrowFour = document.querySelector(".show-four")

// Get answers
const answer1 = document.querySelector(".answer-1")
const answer2 = document.querySelector(".answer-2")
const answer3 = document.querySelector(".answer-3")
const answer4 = document.querySelector(".answer-4")

arrowOne.addEventListener("click", showOne)
arrowTwo.addEventListener("click", showTwo)
arrowThree.addEventListener("click", showThree)
arrowFour.addEventListener("click", showFour)

// Show answer one
function showOne() {
  if (answer1.style.display === "block") {
    answer1.style.display = "none"
  } else {
    answer1.style.display = "block"
  }
}

// Show answer two
function showTwo() {
  if (answer2.style.display === "block") {
    answer2.style.display = "none"
  } else {
    answer2.style.display = "block"
  }
}

// Show answer three
function showThree() {
  if (answer3.style.display === "block") {
    answer3.style.display = "none"
  } else {
    answer3.style.display = "block"
  }
}

// Show answer four
function showFour() {
  if (answer4.style.display === "block") {
    answer4.style.display = "none"
  } else {
    answer4.style.display = "block"
  }
}
