export const itNavigation = {
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

  sidebar: {
    "/it/guides/": [
      {
        text: "Introduzione",
        collapsed: false,
        items: [
          {
            text: "Cos'è Certifaction?",
            link: "/it/guides/what-is-certifaction",
          },
        ],
      },
      {
        text: "Per iniziare",
        collapsed: false,
        items: [
          {
            text: "Installazione",
            link: "/it/guides/installation",
          },
          {
            text: "API locale",
            link: "/it/guides/getting-started-api",
          },
          {
            text: "CLI",
            link: "/it/guides/getting-started-cli",
          },
        ],
      },
      {
        text: "Concetti",
        collapsed: false,
        items: [
          {
            text: "Firma del documento",
            link: "/it/guides/digital-signature",
          },
          {
            text: "Richiesta di firma",
            link: "/it/guides/signature-request",
          },
          {
            text: "Gemello digitale",
            link: "/it/guides/digital-twin",
          },
          {
            text: "Elaborazione locale",
            link: "/it/guides/local-processing",
          },
          {
            text: "Sicurezza e privacy",
            link: "/it/guides/security",
          },
        ],
      },
      {
        text: "Guide pratiche",
        collapsed: false,
        items: [
          {
            text: "Firmare documenti",
            link: "/it/guides/howto-sign-documents",
          },
          {
            text: "Richiedere una firma",
            link: "/it/guides/howto-request-one-signature",
          },
          {
            text: "Richiedere più firme",
            link: "/it/guides/howto-request-multiple-signatures",
          },
          {
            text: "Scaricare documenti",
            link: "/it/guides/howto-download-documents",
          },
          {
            text: "Verificare lo stato del documento",
            link: "/it/guides/howto-check-document-status",
          },
          {
            text: "Guida all'integrazione",
            link: "/it/guides/integration-guide",
          },
        ],
      },
    ],

    "/it/references/": [
      {
        text: "Riferimenti",
        items: [
          {
            text: "Autenticazione",
            link: "/it/references/authentication",
          },
          {
            text: "API locale",
            link: "/it/references/api",
          },
          {
            text: "API Admin",
            link: "/it/references/admin-api",
          },
          {
            text: "Impostazioni proxy HTTP",
            link: "/it/references/http-proxy-settings",
          },
          {
            text: "Comandi CLI",
            link: "/it/references/cli",
          },
        ],
      },
    ],
  },
};