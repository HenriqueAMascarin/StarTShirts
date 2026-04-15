describe('wishlistTests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screenasdasdas', async () => {
    await expect(element(by.id('firstNameInput'))).toBeVisible();
  });
});
