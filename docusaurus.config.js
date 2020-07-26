const constants = {
  WEBSITE_TITLE: 'Website Boilerplate',
  WEBSITE_TAGLINE: 'This is the awesome tagline',
  REPO_NAME: 'website-boilerplate',
  DOCS_HOMEPAGE_ID: 'doc1',
  SLACK:
    'https://join.slack.com/t/gucicpccommunity20/shared_invite/enQtOTA0OTUzNTY0Mjc5LWU3NmQ3ZmRiMTYyNDYwMjVkNGExNzcwNjQ1OTdiYTdlZTA5Mjg0MTM2ZmRkNzIyNjY3MGJhZmExMjM2NTQzMjQ',
  DISCORD: 'https://discord.gg/9Nc9qcy'
}

module.exports = {
  title: constants.WEBSITE_TITLE,
  tagline: constants.WEBSITE_TAGLINE,
  url: 'https://icpc-guc-community.github.io',
  baseUrl: `/${constants.REPO_NAME}/`,
  favicon: 'img/favicon.ico',
  organizationName: 'icpc-guc-community',
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
          href: `https://github.com/icpc-guc-community/${constants.REPO_NAME}`,
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
              href: 'https://www.facebook.com/acm.guc.community'
            },
            {
              label: 'GitHub',
              href: `https://github.com/icpc-guc-community/`
            }
          ]
        }
      ],
      copyright: `Made with ❤️ by ICPC GUC Commnuity`
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
          editUrl: `https://github.com/icpc-guc-community/${constants.REPO_NAME}/edit/master/`
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/icpc-guc-community/${constants.REPO_NAME}/edit/master/`
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
