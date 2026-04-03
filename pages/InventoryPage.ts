import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
