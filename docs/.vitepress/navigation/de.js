export const deNavigation = {
  nav: [
    {
      text: "Anleitung",
      link: "/de/guides/what-is-certifaction",
      activeMatch: "/de/guides/",
    },
    {
      text: "Referenz",
      link: "/de/references/authentication",
      activeMatch: "/de/references/",
    },
    {
      text: "Änderungsprotokoll",
      link: "https://github.com/certifaction/cli/releases",
    },
  ],

  sidebar: {
    "/de/guides/": [
      {
        text: "Einführung",
        collapsed: false,
        items: [
          {
            text: "Was ist Certifaction?",
            link: "/de/guides/what-is-certifaction",
          },
        ],
      },
      {
        text: "Erste Schritte",
        collapsed: false,
        items: [
          {
            text: "Installation",
            link: "/de/guides/installation",
          },
          {
            text: "Lokale API",
            link: "/de/guides/getting-started-api",
          },
          {
            text: "CLI",
            link: "/de/guides/getting-started-cli",
          },
        ],
      },
      {
        text: "Konzepte",
        collapsed: false,
        items: [
          {
            text: "Dokumentensignatur",
            link: "/de/guides/digital-signature",
          },
          {
            text: "Signaturanfrage",
            link: "/de/guides/signature-request",
          },
          {
            text: "Digitaler Zwilling",
            link: "/de/guides/digital-twin",
          },
          {
            text: "Lokale Verarbeitung",
            link: "/de/guides/local-processing",
          },
          {
            text: "Sicherheit und Datenschutz",
            link: "/de/guides/security",
          },
        ],
      },
      {
        text: "Anleitungen",
        collapsed: false,
        items: [
          {
            text: "Dokumente signieren",
            link: "/de/guides/howto-sign-documents",
          },
          {
            text: "Eine Signatur anfordern",
            link: "/de/guides/howto-request-one-signature",
          },
          {
            text: "Mehrere Signaturen anfordern",
            link: "/de/guides/howto-request-multiple-signatures",
          },
          {
            text: "Dokumente herunterladen",
            link: "/de/guides/howto-download-documents",
          },
          {
            text: "Dokumentstatus prüfen",
            link: "/de/guides/howto-check-document-status",
          },
          {
            text: "Integrationsleitfaden",
            link: "/de/guides/integration-guide",
          },
        ],
      },
    ],

    "/de/references/": [
      {
        text: "Referenzen",
        items: [
          {
            text: "Authentifizierung",
            link: "/de/references/authentication",
          },
          {
            text: "Lokale API",
            link: "/de/references/api",
          },
          {
            text: "Admin API",
            link: "/de/references/admin-api",
          },
          {
            text: "HTTP Proxy-Einstellungen",
            link: "/de/references/http-proxy-settings",
          },
          {
            text: "CLI-Befehle",
            link: "/de/references/cli",
          },
        ],
      },
    ],
  },
};