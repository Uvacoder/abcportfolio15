module.exports = {
  siteName: 'Mike McBride',
  siteUrl: 'https://mikemcbride.me',
  siteDescription: 'Personal website of Mike McBride',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/index.md',
        typeName: 'BlogPost',
        route: '/blog/:year/:month/:day/:slug'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
       shouldPurge: true,
       shouldImport: true,
       shouldNest: true,
       shouldAutoprefix: true,
      }
    }
  ]
}
