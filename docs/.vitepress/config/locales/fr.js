// Placeholder for French locale - content to be translated later
export const frConfig = {
  label: 'Français',
  lang: 'fr',
  title: "Portail Développeur | Certifaction Signature PAdES Numérique avec Confidentialité",
  titleTemplate: ":title - Certifaction Signature PAdES Numérique avec Confidentialité",
  description: "Intégrez la signature numérique PAdES Certifaction de documents hautement confidentiels dans votre application et service.",

  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/fr/guides/what-is-certifaction",
        activeMatch: "/fr/guides/",
      },
      {
        text: "Référence",
        link: "/fr/references/api",
        activeMatch: "/fr/references/",
      },
      {
        text: "Journal des modifications",
        link: "https://github.com/certifaction/cli/releases",
      },
    ],
    sidebar: {},
    editLink: {
      pattern: "https://github.com/certifaction/cli/edit/main/docs/fr/:path",
      text: "Modifier cette page sur GitHub",
    },
  }
};