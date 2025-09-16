export const enNavigation = {
  nav: [
    {
      text: "Guide",
      link: "/en/guides/what-is-certifaction",
      activeMatch: "/en/guides/",
    },
    {
      text: "Reference",
      link: "/en/references/api",
      activeMatch: "/en/references/",
    },
    {
      text: "Changelog",
      link: "https://github.com/certifaction/cli/releases",
    },
  ],

  sidebar: {
    "/en/guides/": [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          {
            text: "What is Certifaction?",
            link: "/en/guides/what-is-certifaction",
          },
        ],
      },
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Installation",
            link: "/en/guides/installation",
          },
          {
            text: "Local API",
            link: "/en/guides/getting-started-api",
          },
          {
            text: "CLI",
            link: "/en/guides/getting-started-cli",
          },
        ],
      },
      {
        text: "Concepts",
        collapsed: false,
        items: [
          {
            text: "Document signature",
            link: "/en/guides/digital-signature",
          },
          {
            text: "Signature request",
            link: "/en/guides/signature-request",
          },
          {
            text: "Digital Twin",
            link: "/en/guides/digital-twin",
          },
          {
            text: "Local Processing",
            link: "/en/guides/local-processing",
          },
          {
            text: "Security and Privacy",
            link: "/en/guides/security",
          },
        ],
      },
      {
        text: "HowTos",
        collapsed: false,
        items: [
          {
            text: "Sign documents",
            link: "/en/guides/howto-sign-documents",
          },
          {
            text: "Request one signature",
            link: "/en/guides/howto-request-one-signature",
          },
          {
            text: "Request multiple signatures",
            link: "/en/guides/howto-request-multiple-signatures",
          },
          {
            text: "Download documents",
            link: "/en/guides/howto-download-documents",
          },
          {
            text: "Check document status",
            link: "/en/guides/howto-check-document-status",
          },
          {
            text: "Integration guide",
            link: "/en/guides/integration-guide",
          },
        ],
      },
    ],

    "/en/references/": [
      {
        text: "References",
        items: [
          {
            text: "Local API",
            link: "/en/references/api",
          },
          {
            text: "Admin API",
            link: "/en/references/admin-api",
          },
          {
            text: "HTTP Proxy settings",
            link: "/en/references/http-proxy-settings",
          },
          {
            text: "Authentication",
            link: "/en/references/authentication",
          },
          {
            text: "CLI commands",
            link: "/en/references/cli",
          },
        ],
      },
    ],
  },
};