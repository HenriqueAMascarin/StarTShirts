import { element } from 'detox';

export async function registerUserE2e() {
  const registerElements = {
    firstNameInput: by.id('firstNameInput'),

    lastNameInput: by.id('lastNameInput'),

    emailInput: by.id('emailInput'),

    passwordInput: by.id('passwordInput'),

    confirmPasswordInput: by.id('confirmPasswordInput'),

    registerBtn: by.id('registerButton'),
  };

  await element(registerElements.firstNameInput).replaceText('Henrique');

  await element(registerElements.lastNameInput).replaceText('Testes');

  await element(registerElements.emailInput).replaceText('testes@gmail.com');

  await element(registerElements.passwordInput).replaceText('Henrique!');

  await element(registerElements.confirmPasswordInput).replaceText('Henrique!');

  await element(registerElements.registerBtn).tap();
}
