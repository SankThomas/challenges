const question1 = document.querySelector('.question-1')
const question2 = document.querySelector('.question-2')
const question3 = document.querySelector('.question-3')
const question4 = document.querySelector('.question-4')
const question5 = document.querySelector('.question-5')
const answer1 = document.querySelector('.answer-1')
const answer2 = document.querySelector('.answer-2')
const answer3 = document.querySelector('.answer-3')
const answer4 = document.querySelector('.answer-4')
const answer5 = document.querySelector('.answer-5')
const icon1 = document.querySelector('.icon-1')
const icon2 = document.querySelector('.icon-2')
const icon3 = document.querySelector('.icon-3')
const icon4 = document.querySelector('.icon-4')
const icon5 = document.querySelector('.icon-5')

question1.addEventListener('click', () => {
  if (answer1.style.display === 'block') {
    question1.classList.remove('bold')
    answer1.style.display = 'none'
    icon1.classList.remove('clicked')
  } else {
    question1.classList.add('bold')
    answer1.style.display = 'block'
    icon1.classList.add('clicked')
  }
})

question2.addEventListener('click', () => {
  if (answer2.style.display === 'block') {
    question2.classList.remove('bold')
    answer2.style.display = 'none'
    icon2.classList.remove('clicked')
  } else {
    question2.classList.add('bold')
    answer2.style.display = 'block'
    icon2.classList.add('clicked')
  }
})

question3.addEventListener('click', () => {
  if (answer3.style.display === 'block') {
    question3.classList.remove('bold')
    answer3.style.display = 'none'
    icon3.classList.remove('clicked')
  } else {
    question3.classList.add('bold')
    answer3.style.display = 'block'
    icon3.classList.add('clicked')
  }
})

question4.addEventListener('click', () => {
  if (answer4.style.display === 'block') {
    question4.classList.remove('bold')
    answer4.style.display = 'none'
    icon4.classList.remove('clicked')
  } else {
    question4.classList.add('bold')
    answer4.style.display = 'block'
    icon4.classList.add('clicked')
  }
})

question5.addEventListener('click', () => {
  if (answer5.style.display === 'block') {
    question5.classList.remove('bold')
    answer5.style.display = 'none'
    icon5.classList.remove('clicked')
  } else {
    question5.classList.add('bold')
    answer5.style.display = 'block'
    icon5.classList.add('clicked')
  }
})
