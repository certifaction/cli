import { frNavigation } from "../navigation/fr.js";

export const frConfig = {
  label: 'Français',
  lang: 'fr',
  title: "Portail Développeur | Certifaction Signature PAdES Numérique avec Confidentialité",
  titleTemplate: ":title - Certifaction Signature PAdES Numérique avec Confidentialité",
  description: "Intégrez la signature numérique PAdES Certifaction de documents hautement confidentiels dans votre application et service.",

  themeConfig: {
    ...frNavigation,
    editLink: {
      pattern: "https://github.com/certifaction/cli/edit/main/docs/fr/:path",
      text: "Modifier cette page sur GitHub",
    },
  }
};