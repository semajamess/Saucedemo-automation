import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import users from "../data/users.json";

test.describe("Assertions Test", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    const password = process.env.SAUCE_PASSWORD!;
    await page.goto("https://www.saucedemo.com");
    await loginPage.login(users.validUser, password);
  });

  test("Cart badge updates correctly when multiple items are added", async ({
    page,
  }) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.addBikeLightToCart();
    await inventoryPage.addBoltTShirtToCart();
    await inventoryPage.verifyCartBadgeCount("3");
  });

  test("Cart page displays the correct number of item rows", async ({
    page,
  }) => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.addBikeLightToCart();
    await inventoryPage.goToCart();
    await cartPage.verifyCartItemCount(2);
  });
});
