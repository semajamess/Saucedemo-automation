import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import users from "../data/users.json";

const productsToTest = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

test.describe("Level 1 Practice", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    const password = process.env.SAUCE_PASSWORD!;
    await page.goto("https://www.saucedemo.com");
    await loginPage.login(users.validUser, password);
  });

  test.afterEach(async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.getByRole("link", { name: "Reset App State" }).click();
  });

  for (const product of productsToTest) {
    test(`Dynamic Button check for ${product}`, async ({ page }) => {
      const productCard = page
        .locator(".inventory_item")
        .filter({ hasText: product });
      const addButton = productCard.getByRole("button", {
        name: "Add to cart",
      });
      const removeButton = productCard.getByRole("button", { name: "Remove" });
      await expect(addButton).toBeVisible();
      await addButton.click();
      await expect(addButton).not.toBeVisible();
      await expect(removeButton).toBeVisible();
    });
  }
});
