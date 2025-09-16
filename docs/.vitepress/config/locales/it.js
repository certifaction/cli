// Placeholder for Italian locale - content to be translated later
export const itConfig = {
  label: 'Italiano',
  lang: 'it',
  title: "Portale Sviluppatori | Certifaction Firma Digitale PAdES con Privacy",
  titleTemplate: ":title - Certifaction Firma Digitale PAdES con Privacy",
  description: "Integra la firma digitale PAdES Certifaction di documenti altamente riservati nella tua applicazione e servizio.",

  themeConfig: {
    nav: [
      {
        text: "Guida",
        link: "/it/guides/what-is-certifaction",
        activeMatch: "/it/guides/",
      },
      {
        text: "Riferimento",
        link: "/it/references/api",
        activeMatch: "/it/references/",
      },
      {
        text: "Registro delle modifiche",
        link: "https://github.com/certifaction/cli/releases",
      },
    ],
    sidebar: {},
    editLink: {
      pattern: "https://github.com/certifaction/cli/edit/main/docs/it/:path",
      text: "Modifica questa pagina su GitHub",
    },
  }
};