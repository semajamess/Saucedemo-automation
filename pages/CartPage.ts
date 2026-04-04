import { type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly removeBikeLightButton: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.removeBikeLightButton = page.locator(
      '[data-test="remove-sauce-labs-bike-light"]',
    );
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]',
    );
  }

  async removeBikeLightToCart() {
    await this.removeBikeLightButton.click();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}
