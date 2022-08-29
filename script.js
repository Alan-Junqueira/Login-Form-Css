const emailSelected = () => {
  let inputEmail = document.querySelector('input[name="email"]');
  let divEmail = document.querySelector('div[class="email"]');

  inputEmail.onblur = inputBlur;
  inputEmail.onfocus = inputFocus;

  function inputBlur() {
    inputEmail.classList.remove('activeEmail');
  }

  function inputFocus() {
    inputEmail.classList.add('activeEmail');
    divEmail.classList.add('activeEmail');
  }
};
emailSelected();

const passWordSelected = () => {
  let inputPassword = document.querySelector('input[name="password"]');
  let divPassword = document.querySelector('div[class="password"]');

  inputPassword.onblur = inputBlur;
  inputPassword.onfocus = inputFocus;

  function inputBlur() {
    inputPassword.classList.remove('activedPassword');
  }

  function inputFocus() {
    inputPassword.classList.add('activedPassword');
    divPassword.classList.add('activedPassword');
    console.log('teste')
  }
};

passWordSelected()