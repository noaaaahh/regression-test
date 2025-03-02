import { test, expect } from "@playwright/test";

test("button", async ({ page }, workerInfo) => {
  const params = new URLSearchParams({
    id: "vanilla-button--test-bed",
    viewMode: "story",
  });

  await page.goto(`/iframe.html?${params.toString()}`);
  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveScreenshot(
    `vanilla-button--test-bed-${workerInfo.project.name}.png`,
    { fullPage: true, animations: "disabled" }
  );
});
