import { test as setup, expect } from "@playwright/test";

const authFile = ".auth/user.json";

setup("Authenticate and save state", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page
    .locator('[data-test="password"]')
    .fill(process.env.SAUCE_PASSWORD!);
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator(".title")).toHaveText("Products");
  await page.context().storageState({ path: authFile });
});
