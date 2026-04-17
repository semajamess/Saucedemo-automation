import { test, expect } from "@playwright/test";

test.use({ storageState: ".auth/user.json" });

test("Bypass login and jump straight to the dashboard", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await expect(page.locator(".title")).toHaveText("Products");
});
