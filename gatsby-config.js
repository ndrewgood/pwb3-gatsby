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
    },
    {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    trackingId: "UA-123340572-1",
    // Puts tracking script in the head instead of the body
    head: true,
    // Setting this parameter is optional
    anonymize: true,
    // Setting this parameter is also optional
    respectDNT: true,
    // Avoids sending pageview hits from custom paths
  }
}
  ],
}
