import { defineConfig } from "vitepress";
import { sharedConfig } from "./shared.js";
import { enConfig } from "./locales/en.js";
import { deConfig } from "./locales/de.js";
import { frConfig } from "./locales/fr.js";
import { itConfig } from "./locales/it.js";

export default defineConfig({
  ...sharedConfig,
  locales: {
    en: enConfig,
    de: deConfig,
    fr: frConfig,
    it: itConfig,
  }
});
