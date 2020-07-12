module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx-pages`,
        path: `${__dirname}/mdx/Articles`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jdlennoxs`,
        short_name: `jdlennoxs`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     icon: false,

          //     removeAccents: true,
          //   },
          // },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
          // {
          //   resolve: `gatsby-remark-images-medium-zoom`,
          // },
        //   {
        //     resolve: `gatsby-remark-responsive-iframe`,
        //     options: {
        //       wrapperStyle: `margin-bottom: 1.0725rem`,
        //     },
        //   },
        //   `gatsby-remark-copy-images`,
        //   `gatsby-remark-copy-linked-files`,
        //   `gatsby-remark-smartypants`,
        ],
        plugins: [`gatsby-remark-images`],//, `gatsby-remark-images-medium-zoom`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
