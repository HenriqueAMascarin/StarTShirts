import { device, element } from 'detox';
import { registerUserE2e } from './utils/registerUserE2e';

describe('wishlist', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should wishlist a product', async () => {
    // 1. Register a user
    await registerUserE2e();

    // 2. Go to the first product on home page
    const checkBtnsProductsInHomePage = by.id('productCardCheckBtnTestId');

    const productCheckBtnToWishlist = element(checkBtnsProductsInHomePage).atIndex(0);

    await productCheckBtnToWishlist.tap();

    // 3. Make wishlistBtn visible
    const productScrollContainer = by.id('mainContainerScrollTestId');

    await element(productScrollContainer).scroll(300, 'down', 0.5, 0.5);

    // 4. Tap on wishlist btn
    const wishlistBtn = by.id('wishlistBtnTestId');

    await element(wishlistBtn).tap();

    // 5. Expect to have the whishlistedIcon
    const wishlistedIcon = by.id('wishlistedIconTestId');

    await expect(element(wishlistedIcon)).toBeVisible();
  });
});
