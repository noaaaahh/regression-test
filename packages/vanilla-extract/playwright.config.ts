// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

const BASE_URL = process.env.TEST_BASE_URL || "http://localhost:6006";

export default defineConfig({
  snapshotPathTemplate:
    "./tests/__screenshot__/{arg}-{projectName}-{platform}-{ext}",
  // snapshotDir: "./tests/__screenshot__",
  outputDir: `./tests/results/`,
  // testDir: "./src/components/**/*.test.*",

  // ...
  reporter: [["html", { outputFolder: "./tests/report" }]],
  use: { baseURL: BASE_URL, trace: "on" },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
    {
      name: "Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" },
    },
  ],

  workers: process.env.CI ? 1 : undefined,

  webServer: {
    command: "cd ../../ && pnpm storybook",
    url: BASE_URL,
    reuseExistingServer: false,
  },
});
