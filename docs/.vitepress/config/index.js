import { defineConfig } from "vitepress";
import { sharedConfig } from "./shared.js";
import { enConfig } from "./locales/en.js";

export default defineConfig({
  ...sharedConfig,
  locales: {
    root: enConfig,
  }
});