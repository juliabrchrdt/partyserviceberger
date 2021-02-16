/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Partyservice Berger`,
    description: `Catering und Partyservice im Umkreis Straubing, Buffets aus aller Welt, Kulinarik, Spezialitäten vom Grill, für Hochzeiten, Events, Firmenfeier, Weihnachtsfeiern und mehr`,
    author: `Julia Borchardt`,
    url: "https://bachelor-thesis.netlify.app",
    image: "/images/favicon.png",
  },

  plugins: [`gatsby-plugin-sass`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
