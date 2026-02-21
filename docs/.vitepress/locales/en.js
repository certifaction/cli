import { enNavigation } from "../navigation/en.js";

export const enConfig = {
  label: 'English',
  lang: 'en',
  title: "Developer Portal | Privacy-first Digital PAdES Signature",
  titleTemplate: ":title - Privacy-first Digital PAdES Signature",
  description: "Integrate PAdES digital signature of highly confidential documents in your application and service.",

  themeConfig: {
    ...enNavigation,
  }
};
