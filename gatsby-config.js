module.exports = {
  siteMetadata: {
    title: 'Andrew Goodridge',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-react-next',
            {
              resolve: `gatsby-plugin-favicon`,
              options: {
                logo: "./src/favicon.png",
                injectHTML: true,
                icons: {
                  android: true,
                  appleIcon: true,
                  appleStartup: true,
                  coast: false,
                  favicons: true,
                  firefox: true,
                  twitter: false,
                  yandex: false,
                  windows: false
                }
              }
    }],
}
