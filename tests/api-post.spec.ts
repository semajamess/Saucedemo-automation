import { test, expect } from "@playwright/test";

test("API Test: Create a new system user", async ({ request }) => {
  const newUserPayLoad = {
    firstName: "James",
    lastName: "Ocuaman",
    age: 22,
    role: "Nurse Coordinator",
  };

  const response = await request.post("https://dummyjson.com/users/add", {
    data: newUserPayLoad,
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  console.log(responseBody);

  expect(responseBody.firstName).toBe("James");
  expect(responseBody.role).toBe("Nurse Coordinator");
  expect(responseBody.id).toBeDefined();
});
