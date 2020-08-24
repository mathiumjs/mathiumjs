export default {
  "title": "Mathium Framework",
  "tagline": "Implement math and computational functionality into your code easily and without the hassle.",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "filippo-fonseca",
  "projectName": "mathium",
  "themeConfig": {
    "navbar": {
      "title": "Mathium Framework",
      "logo": {
        "alt": "MathiumJS Logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/mathiumjs/mathiumjs",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Setup",
              "to": "docs"
            },
            {
              "label": "Documentation",
              "to": "docs/perfsquare/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/mathiumjs"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/bTPKpqm"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/mathiumjs"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/mathiumjs/mathiumjs"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Zyndicate"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/Users/filippofonseca/Desktop/Developer/mathium-framework/1.2.0/mathiumjs/site/sidebars.js",
          "editUrl": "https://github.com/filippo-fonseca/mathiumjs"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/filippofonseca/Desktop/Developer/mathium-framework/1.2.0/mathiumjs/site/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};