const form = document.getElementById('form')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  validate()
})

function validate() {
  // Get the input values
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if (firstNameValue === '') {
    setErrorFor(firstname, 'First Name cannot be empty')
  } else {
    setSuccessFor(firstname)
  }

  if (lastNameValue === '') {
    setErrorFor(lastname, 'Last Name cannot be empty')
  } else {
    setSuccessFor(lastname)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty')
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email')
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty')
  } else {
    setSuccessFor(password)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('.error')

  // add error message inside small
  small.innerText = message

  // Add error class
  formControl.className = 'form-control error'
}

function setSuccessFor() {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function isEmail(email) {
  return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
    email
  )
}
