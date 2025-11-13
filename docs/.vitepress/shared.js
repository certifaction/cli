export const sharedConfig = {
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
    footer: {
      copyright: "Copyright © 2020-present Certifaction AG",
    },
  },
};
