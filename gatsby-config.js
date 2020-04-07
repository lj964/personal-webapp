module.exports = {
  siteMetadata: {
    title: `Loay Al-Suraj`,
    description: `Full Stack Developer`,
    siteUrl: `https://www.loay-alsuraj.com`,
    author: `@loay-alsuraj`, 
  },
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Loay Al-Suraj`,
        short_name: `Loay Al-Suraj`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: true,
      },
    }
  ],
}
