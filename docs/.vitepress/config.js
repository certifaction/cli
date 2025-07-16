import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Developer Portal | Certifaction Digital PAdES Signature with Privacy",
  titleTemplate: ":title - Certifaction Digital PAdES Signature with Privacy",
  description:
    "Integrate Certifaction PAdES digital signature of highly confidential documents in your application and service.",

  cleanUrls: true,
  lastUpdated: true,

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("rapi-doc"),
      },
    },
  },

  themeConfig: {
    siteTitle: false,
    logo: {
      light: "/certifaction_logo.svg",
      dark: "/certifaction_logo_white.svg",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/certifaction/cli" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/certifaction-ag/",
      },
    ],

    editLink: {
      pattern: "https://github.com/certifaction/cli/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      copyright: "Copyright © 2020-present Certifaction AG",
    },
    nav: [
      {
        text: "Guide",
        link: "/guides/what-is-certifaction",
        activeMatch: "/guides/",
      },
      {
        text: "Reference",
        link: "/references/api",
        activeMatch: "/references/",
      },
      {
        text: "Changelog",
        link: "https://github.com/certifaction/cli/releases",
      },
    ],
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      "/guides/": [
        {
          text: "Introduction",
          collapsed: false,
          items: [
            {
              text: "What is Certifaction?",
              link: "/guides/what-is-certifaction",
            },
          ],
        },
        {
          text: "Getting Started",
          collapsed: false,
          items: [
            {
              text: "Installation",
              link: "/guides/installation",
            },
            {
              text: "Local API",
              link: "/guides/getting-started-api",
            },
            {
              text: "CLI",
              link: "/guides/getting-started-cli",
            },
          ],
        },
        {
          text: "Concepts",
          collapsed: false,
          items: [
            {
              text: "Document signature",
              link: "/guides/digital-signature",
            },
            {
              text: "Signature request",
              link: "/guides/signature-request",
            },
            {
              text: "Digital Twin",
              link: "/guides/digital-twin",
            },
            {
              text: "Local Processing",
              link: "/guides/local-processing",
            },
            {
              text: "Security and Privacy",
              link: "/guides/security",
            },
          ],
        },
        {
          text: "HowTos",
          collapsed: false,
          items: [
            {
              text: "Sign documents",
              link: "/guides/howto-sign-documents",
            },
            {
              text: "Request one signature",
              link: "/guides/howto-request-one-signature",
            },
            {
              text: "Request multiple signatures",
              link: "/guides/howto-request-multiple-signatures",
            },
            {
              text: "Download documents",
              link: "/guides/howto-download-documents",
            },
            {
              text: "Check document status",
              link: "/guides/howto-check-document-status",
            },
            {
              text: "Complete integration guide",
              link: "/guides/complete-integration-guide",
            },
          ],
        },
      ],

      "/references/": [
        {
          text: "References",
          items: [
            {
              text: "Local API",
              link: "/references/api",
            },
            {
              text: "Admin API",
              link: "/references/admin-api",
            },
            {
              text: "HTTP Proxy settings",
              link: "/references/http-proxy-settings",
            },
            {
              text: "Authentication",
              link: "/references/authentication",
            },
            {
              text: "CLI commands",
              link: "/references/cli",
            },
          ],
        },
      ],
    },
  },
});
