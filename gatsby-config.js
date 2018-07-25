module.exports = {
  siteMetadata: {
    title: 'Andrew Goodridge',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-react-next',
            {
              resolve: 'gatsby-plugin-github-pages',
              options: {
                customDomain: 'http://ndrewgood.com',
                publishOptions: {
                  repo: 'https://github.com/andrewg8/pwb3.git',
                  message: 'Auto-generated commit!'
                }
              }
            },
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
    }
  ],
}
