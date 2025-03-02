import { test, expect } from "@playwright/test";

test("button", async ({ page }, workerInfo) => {
  const params = new URLSearchParams({
    id: "vanilla-button--test-bed",
    viewMode: "story",
  });

  console.log(`/iframe.html?${params.toString()}`);

  await page.goto(`/iframe.html?${params.toString()}`);
  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("domcontentloaded");
  await page.evaluate(() => document.fonts.ready);
  await page.waitForURL(
    "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
  );

  await expect(page).toHaveScreenshot(
    `vanilla-button--test-bed-${workerInfo.project.name}.png`,
    { fullPage: true, animations: "disabled" }
  );
});
