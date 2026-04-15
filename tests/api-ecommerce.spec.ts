import { test, expect } from "@playwright/test";

test("API Test: Verify E-Commerce Cart Data", async ({ request }) => {
  const response = await request.get("https://dummyjson.com/carts/1");

  expect(response.status()).toBe(200);
  const cartData = await response.json();

  expect(cartData.userId).toBe(1);
  expect(cartData.products[1].price).toBe(3999.99);
});
