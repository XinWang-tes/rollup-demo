import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
export default {
  input: "src/index.js",
  output: [
    {
      file: "cjs/index.js",
      format: "cjs",
    },
    {
      file: "es/index.js",
      format: "es",
    },
    {
      file: "minify/bundle.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
