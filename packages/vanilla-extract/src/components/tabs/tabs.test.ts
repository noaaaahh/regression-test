import { test, expect } from "@playwright/test";

test("tabs", async ({ page }, workerInfo) => {
  const params = new URLSearchParams({
    id: "vanilla-tabs--test-bed",
    viewMode: "story",
  });

  await page.goto(`/iframe.html?${params.toString()}`, { waitUntil: "load" });
  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("load");

  // DOM 안정 상태 감지를 위한 스크립트를 페이지에 주입
  await page.addInitScript(() => {
    // no mutation이 발생하면 50ms 후 자동 resolve
    window.waitForDomStable = new Promise<void>((resolve) => {
      const observer = new MutationObserver(() => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          observer.disconnect();
          resolve();
        }, 50);
      });
      let timer = setTimeout(() => {
        observer.disconnect();
        resolve();
      }, 50);
      observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    });
  });

  // DOM이 안정된 상태가 될 때까지 대기
  await page.evaluate(() => window.waitForDomStable);

  await expect(page).toHaveScreenshot({
    fullPage: true,
    animations: "disabled",
  });
});
