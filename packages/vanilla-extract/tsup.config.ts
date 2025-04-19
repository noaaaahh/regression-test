import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

import postcss from "postcss";
import autoprefixer from "autoprefixer";

async function processCss(css: string) {
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
    banner: {
      js: "'use client';",
      css: '@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");',
    },
    external: ["react", "react-dom"],
    minify: true,
    sourcemap: true,

    esbuildPlugins: [vanillaExtractPlugin({ processCss })],
    // esbuildOptions(options) {
    //   options.banner = {
    //     js: '"use client";',
    //   };
    // },
  }),

  // TYPES
  defineConfig({
    entry: ["src/**/index.ts"],
    clean: true,
    dts: { only: true },
    outDir: "dist/types",
    external: ["react", "react-dom"],
    bundle: false,
    esbuildOptions(options) {
      options.outbase = "./";
    },
  }),
];
