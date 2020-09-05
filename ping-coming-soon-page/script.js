/*
1. Get the form
2. Get the button
3. Add an event listener to the button to submit the form
4. Add regex for the email
5. Get the input
6. Check whether the input matches the regex
7. If they match, clear the input
8. If they don't match, display error message


-- Still working on it
*/

const form = document.querySelector("#form-control")
const button = document.querySelector(".btn")
const errorText = document.querySelector("small")

button.addEventListener("click", validate)

function validate() {
  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) {
    return true
  } else {
    errorText.style.display = "block"
  }
}
