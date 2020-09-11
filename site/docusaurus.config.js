module.exports = {
  title: "Mathium Framework",
  tagline:
    "Implement math and computational functionality into your code easily and without the hassle.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "filippo-fonseca", // Usually your GitHub org/user name.
  projectName: "mathium", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Mathium Framework",
      logo: {
        alt: "MathiumJS Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/mathiumjs/mathiumjs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Setup",
              to: "docs",
            },
            {
              label: "Documentation",
              to: "docs/perfsquare/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/mathiumjs",
            },
            {
              label: "Discord",
              href: "https://discord.gg/bTPKpqm",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/mathiumjs",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/mathiumjs/mathiumjs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zyndicate`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/filippo-fonseca/mathiumjs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
