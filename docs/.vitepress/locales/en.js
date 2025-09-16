import { enNavigation } from "../navigation/en.js";

export const enConfig = {
  label: 'English',
  lang: 'en',
  title: "Developer Portal | Certifaction Digital PAdES Signature with Privacy",
  titleTemplate: ":title - Certifaction Digital PAdES Signature with Privacy",
  description: "Integrate Certifaction PAdES digital signature of highly confidential documents in your application and service.",

  themeConfig: {
    ...enNavigation,
    editLink: {
      pattern: "https://github.com/certifaction/cli/edit/main/docs/en/:path",
      text: "Edit this page on GitHub",
    },
  }
};