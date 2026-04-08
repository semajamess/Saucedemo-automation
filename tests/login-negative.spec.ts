import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import users from "../data/users.json";

test.describe("Login Page Negative Test", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto("https://www.saucedemo.com");
  });

  test("User cannot login with invalid password", async ({ page }) => {
    await loginPage.login(users.validUser, "12345");
    await loginPage.verifyErrorMessage(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  test("Locked out user cannot login", async ({ page }) => {
    const password = process.env.SAUCE_PASSWORD!;

    await loginPage.login("locked_out_user", password);
    await loginPage.verifyErrorMessage(
      "Epic sadface: Sorry, this user has been locked out.",
    );
  });
});
