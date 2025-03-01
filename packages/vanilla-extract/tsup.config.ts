import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

import postcss from "postcss";
import autoprefixer from "autoprefixer";

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });

  return result.css;
}

export default [
  // ESM, CJS
  defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    clean: true,
    outDir: "dist",
    banner: { js: '"use client";' },
    external: ["react", "react-dom"],
    splitting: true,
    minify: true,
    sourcemap: true,

    esbuildPlugins: [vanillaExtractPlugin({ processCss })],
  }),

  // TYPES
  defineConfig({
    entry: ["src/index.ts"],
    clean: true,
    dts: { only: true },
    outDir: "dist",
    external: ["react", "react-dom"],
  }),
];
