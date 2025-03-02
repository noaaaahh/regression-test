import { test, expect } from "@playwright/test";

// DOM 변경이 완료될 때까지 busy.pendingDom을 폴링하여 기다리는 함수
async function waitForStableDom(
  busy: { pendingDom: number },
  timeout: number = 5000
) {
  const pollInterval = 50;
  const start = Date.now();
  while (busy.pendingDom > 0) {
    if (Date.now() - start > timeout) {
      throw new Error("DOM 변경이 제시간에 안정 상태에 도달하지 못했습니다.");
    }
    await new Promise((resolve) => setTimeout(resolve, pollInterval));
  }
}

test("button", async ({ page }) => {
  // busy 객체를 사용해 DOM 변경 횟수를 추적합니다.
  const busy = { pendingDom: 0 };

  // exposeFunction은 그대로 사용합니다.
  await page.exposeFunction("DOM_변환_감지", (key: string) => {
    if (key === "dom++") busy.pendingDom += 1;
    if (key === "dom--") busy.pendingDom -= 1;
  });

  // 페이지 초기 스크립트에 MutationObserver를 추가합니다.
  // _requestAnimtaionFrame 오타를 requestAnimationFrame으로 수정했습니다.
  await page.addInitScript(`{
      new MutationObserver(() => {
        window.DOM_변환_감지("dom++");
        requestAnimationFrame(() => {
          window.DOM_변환_감지("dom--");
        });
      }).observe(document, { attributes: true, childList: true, subtree: true });
    }`);

  // DOM 변경이 모두 끝날 때까지 대기합니다.
  await waitForStableDom(busy);

  const params = new URLSearchParams({
    id: "vanilla-button--test-bed",
    viewMode: "story",
  });

  await page.goto(`/iframe.html?${params.toString()}`);
  await page.waitForSelector("#storybook-root");

  await page.waitForTimeout(5000);
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("load");
  await page.waitForLoadState("networkidle");

  await page.waitForTimeout(5000);
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("load");
  await page.waitForLoadState("networkidle");

  await page.waitForTimeout(5000);
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("load");
  await page.waitForLoadState("networkidle");

  // 안정된 DOM 상태에서 스냅샷을 찍습니다.
  await expect(page).toHaveScreenshot({
    fullPage: true,
    animations: "disabled",
  });
});

// import { test, expect } from "@playwright/test";

// test("button", async ({ page }, workerInfo) => {
//   const params = new URLSearchParams({
//     id: "vanilla-button--test-bed",
//     viewMode: "story",
//   });

//   await page.goto(`/iframe.html?${params.toString()}`);
//   await page.waitForSelector("#storybook-root");
//   await page.waitForLoadState("domcontentloaded");

//   await page.addInitScript(() => {
//     // no mutation이 발생하면 50ms 후 자동 resolve
//     window.waitForDomStable = new Promise<void>((resolve) => {
//       const observer = new MutationObserver(() => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//           observer.disconnect();
//           resolve();
//         }, 50);
//       });
//       let timer = setTimeout(() => {
//         observer.disconnect();
//         resolve();
//       }, 50);
//       observer.observe(document, {
//         attributes: true,
//         childList: true,
//         subtree: true,
//       });
//     });
//   });

//   // DOM이 안정된 상태가 될 때까지 대기
//   await page.evaluate(() => window.waitForDomStable);
//   await page.waitForTimeout(10000);

//   await expect(page).toHaveScreenshot({
//     fullPage: true,
//     animations: "disabled",
//   });
// });
