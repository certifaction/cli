import { deNavigation } from "../navigation/de.js";

export const deConfig = {
  label: 'Deutsch',
  lang: 'de',
  title: "Entwicklerportal | Certifaction Digitale PAdES-Signatur mit Datenschutz",
  titleTemplate: ":title - Certifaction Digitale PAdES-Signatur mit Datenschutz",
  description: "Integrieren Sie Certifaction PAdES digitale Signatur hochvertraulicher Dokumente in Ihre Anwendung und Service.",

  themeConfig: {
    ...deNavigation,
    editLink: {
      pattern: "https://github.com/certifaction/cli/edit/main/docs/de/:path",
      text: "Diese Seite auf GitHub bearbeiten",
    },
  }
};