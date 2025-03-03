import { test, expect } from "@playwright/test";

test("dialog", async ({ page }) => {
  const params = new URLSearchParams({
    id: "vanilla-dialog--test-bed",
    viewMode: "story",
  });

  await page.goto(`/iframe.html?${params.toString()}`);
  await page.waitForSelector("#storybook-root");
  await page.waitForLoadState("domcontentloaded");

  await expect(page).toHaveScreenshot({
    animations: "disabled",
  });
});

// import { expect, test } from "@playwright/test";

// // DOM 변경이 완료될 때까지 busy.pendingDom을 폴링하여 기다리는 함수
// async function waitForStableDom(
//   busy: { pendingDom: number },
//   timeout: number = 5000
// ) {
//   const pollInterval = 50;
//   const start = Date.now();
//   while (busy.pendingDom > 0) {
//     if (Date.now() - start > timeout) {
//       throw new Error("DOM 변경이 제시간에 안정 상태에 도달하지 못했습니다.");
//     }
//     await new Promise((resolve) => setTimeout(resolve, pollInterval));
//   }
// }

// test("dialog", async ({ page }) => {
//   // const responsePromise = page.waitForResponse(
//   //   "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
//   // );
//   const busy = { pendingDom: 0 };

//   // exposeFunction은 그대로 사용합니다.
//   await page.exposeFunction("DOM_변환_감지", (key: string) => {
//     if (key === "dom++") busy.pendingDom += 1;
//     if (key === "dom--") busy.pendingDom -= 1;
//   });

//   // 페이지 초기 스크립트에 MutationObserver를 추가합니다.
//   // _requestAnimtaionFrame 오타를 requestAnimationFrame으로 수정했습니다.
//   await page.addInitScript(`{
//       new MutationObserver(() => {
//         window.DOM_변환_감지("dom++");
//         requestAnimationFrame(() => {
//           window.DOM_변환_감지("dom--");
//         });
//       }).observe(document, { attributes: true, childList: true, subtree: true });
//     }`);

//   // DOM 변경이 모두 끝날 때까지 대기합니다.
//   await waitForStableDom(busy);

//   const params = new URLSearchParams({
//     id: "vanilla-dialog--test-bed",
//     viewMode: "story",
//   });

//   await page.goto(`/iframe.html?${params.toString()}`);
//   await page.waitForSelector("#storybook-root");
//   await page.waitForLoadState("domcontentloaded");
//   // const response = await responsePromise;

//   // await response.finished();

//   await expect(page).toHaveScreenshot({ animations: "disabled" });
// });
