const constants = {
  WEBSITE_TITLE: 'Website Boilerplate',
  WEBSITE_TAGLINE: 'This is the awesome tagline',
  REPO_NAME: 'website-boilerplate',
  DOCS_HOMEPAGE_ID: 'doc1',
  SLACK:'',
  DISCORD: ''
}

module.exports = {
  title: constants.WEBSITE_TITLE,
  tagline: constants.WEBSITE_TAGLINE,
  url: 'https://savvy-guc.github.io',
  baseUrl: `/${constants.REPO_NAME}/`,
  favicon: 'img/favicon.ico',
  organizationName: 'savvy-guc',
  projectName: constants.REPO_NAME,
  themeConfig: {
    navbar: {
      title: constants.WEBSITE_TITLE,
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Tutorials',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: `https://github.com/savvy-guc/${constants.REPO_NAME}`,
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Tutorials',
              to: 'docs'
            },
            {
              label: 'Blog',
              to: 'blog'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: constants.SLACK
            },
            {
              label: 'Discord',
              href: constants.DISCORD
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/savvy.guc'
            },
            {
              label: 'GitHub',
              href: `https://github.com/savvy-guc/`
            }
          ]
        }
      ],
      copyright: `Made with ❤️ by Savvy`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: constants.DOCS_HOMEPAGE_ID,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `https://github.com/savvy-guc/${constants.REPO_NAME}/edit/master/`
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/savvy-guc/${constants.REPO_NAME}/edit/master/`
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
