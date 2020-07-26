const constants = {
  WEBSITE_TITLE: 'Website Boilerplate',
  WEBSITE_TAGLINE: 'This is the awesome tagline',
  REPO_NAME: 'website-boilerplate',
  DOCS_HOMEPAGE_ID: 'doc1'
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
