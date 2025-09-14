import { test, expect } from "@playwright/test";

test.describe("display venues", () => {
  test("display venues on page", async ({ page }) => {
    await page.goto("/");
    await page.locator("#venue-container").first().click();
    await expect(
      page.getByRole("heading", { name: "Venue details", slowMo: 500 }),
    ).toBeVisible();
  });
});
