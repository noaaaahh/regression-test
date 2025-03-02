import { expect, test } from "@playwright/test";

test("dialog", async ({ page }, workerInfo) => {
  const params = new URLSearchParams({
    id: "vanilla-dialog--test-bed",
    viewMode: "story",
  });

  await page.goto(`/iframe.html?${params.toString()}`);
  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveScreenshot(
    `vanilla-dialog--test-bed-${workerInfo.project.name}.png`,
    { animations: "disabled" }
  );
});
