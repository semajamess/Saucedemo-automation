import { test, expect } from "@playwright/test";

test.describe("Direct API Testing", () => {
  test("GET request - Fetch user data from the server", async ({ request }) => {
    const response = await request.get(
      "https://jsonplaceholder.typicode.com/users/2",
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.name).toBe("Ervin Howell");
  });

  test("POST request - Create a new record in the database", async ({
    request,
  }) => {
    const newPostData = {
      title: "Playwright API Testing",
      body: "This is my first automated POST request",
      userId: 1,
    };

    const response = await request.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        data: newPostData,
      },
    );

    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody.title).toBe("Playwright API Testing");
    console.log("Server responded with: ", responseBody);
  });
});
