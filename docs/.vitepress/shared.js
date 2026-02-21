export const sharedConfig = {
  cleanUrls: true,
  lastUpdated: true,
  head: [
    // Flash-prevention: detect theme from domain/query param before body paint
    ["script", {}, `
(function() {
  var theme = 'certifaction';
  try {
    var params = new URLSearchParams(window.location.search);
    var paramTheme = params.get('theme');
    if (paramTheme === 'mss' || paramTheme === 'certifaction') {
      theme = paramTheme;
    } else {
      var host = window.location.hostname;
      if (host.indexOf('telesec.de') !== -1 || host.indexOf('magenta-security-sign') !== -1) {
        theme = 'mss';
      }
    }
  } catch(e) {}
  document.documentElement.classList.add('theme-' + theme);
  // Set favicon early
  var favicon = theme === 'mss' ? '/themes/mss/favicon.png' : '/themes/certifaction/favicon.ico';
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = theme === 'mss' ? 'image/png' : 'image/x-icon';
  link.href = favicon;
  document.head.appendChild(link);
})();
`],
  ],
  ignoreDeadLinks: [
    /^\/downloads\/.*/,
  ],

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("rapi-doc"),
      },
    },
  },

  themeConfig: {
    siteTitle: false,
    // Logo, socialLinks, and footer are set dynamically by Layout.vue
    // Defaults here for SSR (certifaction as default)
    logo: {
      light: "/themes/certifaction/logo.svg",
      dark: "/themes/certifaction/logo_white.svg",
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
