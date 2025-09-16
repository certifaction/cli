import { itNavigation } from "../navigation/it.js";

export const itConfig = {
  label: 'Italiano',
  lang: 'it',
  title: "Portale Sviluppatori | Certifaction Firma Digitale PAdES con Privacy",
  titleTemplate: ":title - Certifaction Firma Digitale PAdES con Privacy",
  description: "Integra la firma digitale PAdES Certifaction di documenti altamente riservati nella tua applicazione e servizio.",

  themeConfig: {
    ...itNavigation,
    editLink: {
      pattern: "https://github.com/certifaction/cli/edit/main/docs/it/:path",
      text: "Modifica questa pagina su GitHub",
    },
  }
};