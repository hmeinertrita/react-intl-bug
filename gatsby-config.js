module.exports = {
  siteMetadata: {
    title: 'Prefix Page Repro',
    author: 'hmeinertrita',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `prefix-paths`,
      options: {
        prefixes: [
          'prefix1',
          'prefix2',
        ]
      },
    },
  ],
}
