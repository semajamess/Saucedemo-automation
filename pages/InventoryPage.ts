import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly addBikeLightButton: Locator;
  readonly addFleeceJacketButton: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.addBikeLightButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]',
    );
    this.addFleeceJacketButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    );
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async addBikeLightToCart() {
    await this.addBikeLightButton.click();
  }

  async addFleeceJacketToCart() {
    await this.addFleeceJacketButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}
