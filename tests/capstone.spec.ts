import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";

test.use({ storageState: ".auth/user.json" });

test("Master Capstone: API pre-check, Network Hijack, and POM UI Validation", async ({
  page,
  request,
}) => {
  console.log("1. Pinging backend database...");
  const response = await request.get("https://dummyjson.com/products/1");
  expect(response.status()).toBe(200);

  console.log("2. Blocking images to speed up test...");
  await page.route("**/*.{png,jpg,jpeg}", async (route) => {
    await route.abort();
  });

  console.log("3. Navigating to dashboard and verifying UI...");
  const inventoryPage = new InventoryPage(page);
  await page.goto("https://www.saucedemo.com/inventory.html");
  await inventoryPage.verifyLoggedIn();
});
