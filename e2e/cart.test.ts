import { device, element } from 'detox';
import { registerUserE2e } from './utils/registerUserE2e';
describe('cart', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should add a product to the cart', async () => {
    // 1. Register a user
    await registerUserE2e();

    // 2. Go to the first product on home page
    const checkBtnsProductsInHomePage = by.id('productCardCheckBtnTestId');

    const productCheckBtnToWishlist = element(checkBtnsProductsInHomePage).atIndex(0);

    await productCheckBtnToWishlist.tap();

    // 3. Make cart btn visible
    const productScrollContainer = by.id('mainContainerScrollTestId');

    await element(productScrollContainer).scroll(400, 'down', 0.5, 0.5);

    // 4. Tap on purchase btn
    const purchaseBtn = by.id('purchaseBtnTestId');

    await element(purchaseBtn).tap();

    // 5. Expect to have a success notification
    const successNotification = by.id('successNotificationTestId-putCartProduct');

    await expect(element(successNotification)).toBeVisible();
  });
});
