import { test, expect } from "@playwright/test";

test.describe("API Mocking Tests", () => {
  test("Mocks the fruit API to show a custom fruit", async ({ page }) => {
    await page.route("*/**/api/v1/fruits", async (route) => {
      const fakeFruitData = [{ name: "Quantum Strawberry", id: 1 }];

      await route.fulfill({
        json: fakeFruitData,
      });
    });

    await page.goto("https://demo.playwright.dev/api-mocking");
    await expect(page.getByText("Quantum Strawberry")).toBeVisible();
  });
});
