// Placeholder for German locale - content to be translated later
export const deConfig = {
  label: 'Deutsch',
  lang: 'de',
  title: "Entwicklerportal | Certifaction Digitale PAdES-Signatur mit Datenschutz",
  titleTemplate: ":title - Certifaction Digitale PAdES-Signatur mit Datenschutz",
  description: "Integrieren Sie Certifaction PAdES digitale Signatur hochvertraulicher Dokumente in Ihre Anwendung und Service.",

  themeConfig: {
    // Navigation will be added when German content is created
    nav: [
      {
        text: "Anleitung",
        link: "/de/guides/what-is-certifaction",
        activeMatch: "/de/guides/",
      },
      {
        text: "Referenz",
        link: "/de/references/api",
        activeMatch: "/de/references/",
      },
      {
        text: "Änderungsprotokoll",
        link: "https://github.com/certifaction/cli/releases",
      },
    ],
    sidebar: {},
    editLink: {
      pattern: "https://github.com/certifaction/cli/edit/main/docs/de/:path",
      text: "Diese Seite auf GitHub bearbeiten",
    },
  }
};