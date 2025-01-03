import { plugin } from "./plugins.js";

export default [
  { ignores: ["eslint.config.js"] },
  {
    plugins: {
      lf: plugin,
    },
    rules: {
      "lf/no-lf-vars": "error",
    },
  },
];
