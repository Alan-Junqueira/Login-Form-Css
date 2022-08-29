// const emailActive = document.querySelector('input[name="email"]');
// console.log(emailActive)

// function activeHoverEmail() {
//   const emailHover = document.querySelector('.emailFocus');
//   const emailDefault = document.querySelector('.e-mail div');
//   const label = document.querySelector('.e-mail div label');
//   const img = document.querySelector('.e-mail div img');
//   const input = document.querySelector('.e-mail div input');
//   const emailActive = document.querySelector('input[name="email"]');

//   function activeHoverEmail() {
//     emailHover.classList.add('emailFocusAtivo');
//     emailDefault.classList.add('emailHidden');
//     label.classList.add('emailHidden');
//     img.classList.add('emailHidden');
//     input.classList.add('emailHidden');
//     emailActive.classList.add('active');
//   }

//   function removeDefaultMenuEmail() {
//     if (emailDefault.classList.length === 0) {
//       emailDefault.addEventListener('', activeHoverEmail);
//     }
//   }
//   removeDefaultMenuEmail();
// }
// activeHoverEmail();

// function unActiveHoverEmail() {
//   const emailHover = document.querySelector('.emailFocus');
//   const emailDefault = document.querySelector('.e-mail div');
//   const label = document.querySelector('.e-mail div label');
//   const img = document.querySelector('.e-mail div img');
//   const input = document.querySelector('.e-mail div input');
//   const pEmailFocus = document.querySelector('.emailFocus p');
//   const section = document.querySelector('section');
//   const pPasswordFocus = document.querySelector('.password p');

//   function activeHoverEmail() {
//     emailHover.classList.remove('emailFocusAtivo');
//     emailDefault.classList.remove('emailHidden');
//     label.classList.remove('emailHidden');
//     img.classList.remove('emailHidden');
//     input.classList.remove('emailHidden');
//   }

//   function removeDefaultMenuEmail() {
//     if (section.classList.length === 1) {
//       pEmailFocus.addEventListener('mouseenter', activeHoverEmail),
//         pPasswordFocus.addEventListener('mouseenter', activeHoverEmail);
//     }
//   }
//   removeDefaultMenuEmail();
// }
// unActiveHoverEmail();

// function activeHoverPassword() {
//   const passwordHover = document.querySelector('.passwordFocus');
//   const passwordDefault = document.querySelector('.password div');
//   const label = document.querySelector('.password div label');
//   const img = document.querySelector('.password div img');
//   const input = document.querySelector('.password div input');

//   function activeHoverpassword() {
//     passwordHover.classList.add('passwordFocusAtivo');
//     passwordDefault.classList.add('passwordHidden');
//     label.classList.add('passwordHidden');
//     img.classList.add('passwordHidden');
//     input.classList.add('passwordHidden');
//   }

//   function removeDefaultMenuPassword() {
//     if (passwordDefault.classList.length === 0) {
//       passwordDefault.addEventListener('mouseenter', activeHoverpassword);
//     }
//   }
//   removeDefaultMenuPassword();
// }
// activeHoverPassword();

// function unActiveHoverPassword() {
//   const passwordHover = document.querySelector('.passwordFocus');
//   const passwordDefault = document.querySelector('.password div');
//   const label = document.querySelector('.password div label');
//   const img = document.querySelector('.password div img');
//   const input = document.querySelector('.password div input');
//   const pPasswordFocus = document.querySelector('.passwordFocus p');
//   const section = document.querySelector('section');
//   const checkbox = document.querySelector('.checkbox');

//   function activeHoverPassword() {
//     passwordHover.classList.remove('passwordFocusAtivo');
//     passwordDefault.classList.remove('passwordHidden');
//     label.classList.remove('passwordHidden');
//     img.classList.remove('passwordHidden');
//     input.classList.remove('passwordHidden');
//   }

//   function removeDefaultMenuPassword() {
//     if (section.classList.length === 1) {
//       pPasswordFocus.addEventListener('mouseenter', activeHoverPassword),
//         checkbox.addEventListener('mouseenter', activeHoverPassword);
//     }
//   }
//   removeDefaultMenuPassword();
// }
// unActiveHoverPassword();
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