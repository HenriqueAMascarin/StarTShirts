export async function registerUserE2e() {
  const registerElements = {
    firstNameInput: element(by.id('firstNameInput')),

    lastNameInput: element(by.id('lastNameInput')),

    emailInput: element(by.id('emailInput')),

    passwordInput: element(by.id('passwordInput')),

    confirmPasswordInput: element(by.id('confirmPasswordInput')),

    registerBtn: element(by.id('registerButton')),
  };

  await registerElements.firstNameInput.typeText('Henrique');

  await registerElements.lastNameInput.typeText('Testes');

  await registerElements.emailInput.typeText('testes@gmail.com');

  await registerElements.passwordInput.typeText('Henrique!');

  await registerElements.confirmPasswordInput.typeText('Henrique!');

  await registerElements.registerBtn.tap();
}
