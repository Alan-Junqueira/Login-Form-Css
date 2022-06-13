const emailDefault = document.querySelector('.e-mail')
const passwordDefault = document.querySelector('.password')
const emailHover = document.querySelector('.emailFocus')
const passwordHover = document.querySelector('.passwordFocus')

function defaultMenu() {
  if (emailDefault.classList.value && passwordDefault.classList.value) {
    emailDefault.classList.add('emailAtivo')
    passwordDefault.classList.add('passwordAtivo')
  }
}
defaultMenu()

function removeDefaultMenu() {
  forEach()
}