import { test, expect } from "@playwright/test";

test("UI won't crash when tries to load 50 patient appointments", async ({
  page,
}) => {
  await page.route("https://dummyjson.com/products/1", async (route) => {
    const products = { title: "James's Super Backpack", price: 100000 };

    await route.fulfill({
      json: products,
    });
  });

  await page.goto(
    "data:text/html,<script>fetch('https://dummyjson.com/products/1').then(res=>res.json()).then(data=>{document.body.innerHTML = '<h1>' + data.title + '</h1><p>$' + data.price + '</p>';})</script>",
  );
  await expect(page.getByText("James's Super Backpack")).toBeVisible();
});
