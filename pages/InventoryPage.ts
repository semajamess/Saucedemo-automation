import { type Locator, type Page, type Expect, expect } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly addBikeLightButton: Locator;
  readonly addFleeceJacketButton: Locator;
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;
  readonly addBoltTshirtButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.addBoltTshirtButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
    );
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

  async addBoltTShirtToCart() {
    await this.addBoltTshirtButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async verifyCartBadgeCount(expectedCount: string) {
    await expect(this.cartBadge).toHaveText(expectedCount);
  }
}
