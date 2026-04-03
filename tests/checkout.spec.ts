import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import users from "../data/users.json";

test("User can complete a purchase", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);
  const password = process.env.SAUCE_PASSWORD!;

  await page.goto("https://www.saucedemo.com/");
  await loginPage.login(users.validUser, password);
  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();
  await checkoutPage.completeCheckout("Juan", "Dela Cruz", "5000");
  await checkoutPage.verifyOrderSuccess();
});
