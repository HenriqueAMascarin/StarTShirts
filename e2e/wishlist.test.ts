import { device } from 'detox';
import { registerUserE2e } from './utils/registerUserE2e';

describe('wishlist', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should be wishlisted', async () => {
    await registerUserE2e();

    const checkBtnsProductsInHomePage = element(by.id('productCardCheckBtn'));

    const productCheckBtnToWishlist = checkBtnsProductsInHomePage.atIndex(1);

    await productCheckBtnToWishlist.tap();
  });
});
