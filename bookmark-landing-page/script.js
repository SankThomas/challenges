/*
MENU BUTTON
1. Get the menu button
2. Get the close button
3. Get the navbar
4. When you click the menu button, open the navbar, and show the close button
5. When you click the close button, close the navbar and show the menu button

Features

FAQs
1. Get the arrow image
2. Get the answer section
3. Add a click event to the arrow to show the answer when it is clicked

*/

const menuButton = document.querySelector(".menu-btn")
const closeButton = document.querySelector(".close")
const navbar = document.querySelector("nav")

menuButton.addEventListener("click", showNav)
closeButton.addEventListener("click", closeNav)

function showNav() {
  if (navbar.style.display === "block") {
    navbar.style.display = "none"
  } else {
    navbar.style.display = "block"
  }
}

// Show close button when navbar is open
function showClose() {
  if (navbar.style.display === "block") {
    closeButton.style.display = "block"
  } else {
    closeButton.style.display = "none"
  }
}

// Close navbar
function closeNav() {
  navbar.style.display = "none"
}

// Get current class
const listItems = document.querySelectorAll(".list-item")
const current = document.querySelector(".current")

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
