import { deNavigation } from "../navigation/de.js";

export const deConfig = {
  label: 'Deutsch',
  lang: 'de',
  title: "Entwicklerportal | Digitale PAdES-Signatur mit Datenschutz",
  titleTemplate: ":title - Digitale PAdES-Signatur mit Datenschutz",
  description: "Integrieren Sie PAdES digitale Signatur hochvertraulicher Dokumente in Ihre Anwendung und Service.",

  themeConfig: {
    ...deNavigation,
  }
};
