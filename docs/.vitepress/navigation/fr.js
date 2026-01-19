export const frNavigation = {
  nav: [
    {
      text: "Guide",
      link: "/fr/guides/what-is-certifaction",
      activeMatch: "/fr/guides/",
    },
    {
      text: "Référence",
      link: "/fr/references/authentication",
      activeMatch: "/fr/references/",
    },
    {
      text: "Journal des modifications",
      link: "https://github.com/certifaction/cli/releases",
    },
  ],

  sidebar: {
    "/fr/guides/": [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          {
            text: "Qu'est-ce que Certifaction ?",
            link: "/fr/guides/what-is-certifaction",
          },
        ],
      },
      {
        text: "Premiers pas",
        collapsed: false,
        items: [
          {
            text: "Installation",
            link: "/fr/guides/installation",
          },
          {
            text: "API locale",
            link: "/fr/guides/getting-started-api",
          },
          {
            text: "CLI",
            link: "/fr/guides/getting-started-cli",
          },
        ],
      },
      {
        text: "Concepts",
        collapsed: false,
        items: [
          {
            text: "Signature de document",
            link: "/fr/guides/digital-signature",
          },
          {
            text: "Demande de signature",
            link: "/fr/guides/signature-request",
          },
          {
            text: "Jumeau numérique",
            link: "/fr/guides/digital-twin",
          },
          {
            text: "Traitement local",
            link: "/fr/guides/local-processing",
          },
          {
            text: "Sécurité et confidentialité",
            link: "/fr/guides/security",
          },
        ],
      },
      {
        text: "Guides pratiques",
        collapsed: false,
        items: [
          {
            text: "Signer des documents",
            link: "/fr/guides/howto-sign-documents",
          },
          {
            text: "Demander une signature",
            link: "/fr/guides/howto-request-one-signature",
          },
          {
            text: "Demander plusieurs signatures",
            link: "/fr/guides/howto-request-multiple-signatures",
          },
          {
            text: "Télécharger des documents",
            link: "/fr/guides/howto-download-documents",
          },
          {
            text: "Vérifier le statut du document",
            link: "/fr/guides/howto-check-document-status",
          },
          {
            text: "Guide d'intégration",
            link: "/fr/guides/integration-guide",
          },
        ],
      },
    ],

    "/fr/references/": [
      {
        text: "Références",
        items: [
          {
            text: "Authentification",
            link: "/fr/references/authentication",
          },
          {
            text: "API locale",
            link: "/fr/references/api",
          },
          {
            text: "API Admin",
            link: "/fr/references/admin-api",
          },
          {
            text: "Paramètres proxy HTTP",
            link: "/fr/references/http-proxy-settings",
          },
          {
            text: "Commandes CLI",
            link: "/fr/references/cli",
          },
        ],
      },
    ],
  },
};