import json from "@rollup/plugin-json";
export default {
  input: "src/index.js",
  output: {
    file: "bundle.js",
  },
  watch: {
    include: "src/**",
  },
  plugins: [json()],
};
