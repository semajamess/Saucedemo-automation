import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CartPage } from "../pages/CartPage";
import { InventoryPage } from "../pages/InventoryPage";
import users from "../data/users.json";

test("User can change items and complete a purchase", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);
  const cartPage = new CartPage(page);
  const password = process.env.SAUCE_PASSWORD!;

  await page.goto("https://www.saucedemo.com");
  await loginPage.login(users.validUser, password);
  await inventoryPage.addBikeLightToCart();
  await inventoryPage.addFleeceJacketToCart();
  await inventoryPage.goToCart();
  await cartPage.removeBikeLightToCart();
  await checkoutPage.completeCheckout("James", "Andrew", "5020");
  await checkoutPage.verifyOrderSuccess();
});
