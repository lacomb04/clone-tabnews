test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://sturdy-pancake-4rjv7g9qjv3j6xq-3000.app.github.dev/api/v1/status/status",
  );
  expect(response.status).toBe(200);
});
