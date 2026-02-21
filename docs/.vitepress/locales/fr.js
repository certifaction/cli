import { frNavigation } from "../navigation/fr.js";

export const frConfig = {
  label: 'Français',
  lang: 'fr',
  title: "Portail Développeur | Signature PAdES Numérique avec Confidentialité",
  titleTemplate: ":title - Signature PAdES Numérique avec Confidentialité",
  description: "Intégrez la signature numérique PAdES de documents hautement confidentiels dans votre application et service.",

  themeConfig: {
    ...frNavigation,
  }
};
