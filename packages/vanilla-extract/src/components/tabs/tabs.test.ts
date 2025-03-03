import { test, expect } from "@playwright/test";

test("tabs", async ({ page }) => {
  const params = new URLSearchParams({
    id: "vanilla-tabs--test-bed",
    viewMode: "story",
  });

  await page.goto(`/iframe.html?${params.toString()}`, { waitUntil: "load" });
  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("load");
  await page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveScreenshot({
    animations: "disabled",
  });
});
