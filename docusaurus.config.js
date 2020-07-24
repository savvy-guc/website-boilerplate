const WEBSITE_TITLE = 'Website Boilerplate'
const REPO_NAME = 'website-boilerplate'
const DOCS_HOMEPAGE_ID = 'doc1'

module.exports = {
  title: WEBSITE_TITLE,
  tagline: `The tagline of ${WEBSITE_TITLE}`,
  url: 'https://icpc-guc-community.github.io',
  baseUrl: `/${REPO_NAME}/`,
  favicon: 'img/favicon.ico',
  organizationName: 'icpc-guc-community',
  projectName: REPO_NAME,
  themeConfig: {
    navbar: {
      title: WEBSITE_TITLE,
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Tutorials',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: `https://github.com/icpc-guc-community/${REPO_NAME}`,
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Made with ❤️ by ICPC GUC Commnuity. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: DOCS_HOMEPAGE_ID,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `https://github.com/icpc-guc-community/${REPO_NAME}/edit/master/`
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/icpc-guc-community/${REPO_NAME}/edit/master/`
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
