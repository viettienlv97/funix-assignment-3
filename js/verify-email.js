// DOM
const information = document.getElementById('information')
const emailForm = document.getElementById('email-form')
const btnSubmit = document.getElementById('btn-submit')
const emailInput = document.getElementById('email-input')

// CSS
emailForm.classList.remove('d-none')
information.classList.add('d-none')

// regex
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// handle verify email
const verifyEmail = () => {
  const emailAddress = emailInput.value
  if (!emailAddress) {
    alert('Please input email address')
    return
  }

  const Reg = new RegExp(regex)
  const result = Reg.test(emailAddress)
  if (!result) alert('Please input valid email')
  else {
    emailForm.classList.add('d-none')
    information.classList.remove('d-none')
  }
}

// add event
btnSubmit.addEventListener('click', verifyEmail)
