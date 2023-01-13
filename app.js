const form = document.querySelector('form')
const email = document.querySelector('#email')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', validateEmail)

function validateEmail(e) {
    e.preventDefault()
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
  {
    errorMessage.remove('display-block')
    email.value = ''
  } else {
    errorMessage.classList.add('display-block')
  }
}