module.exports = {
    siteMetadata: {
        title: `Gatsby WordPress Starter`,
        description: `Kick off your next, great Gatsby project with this WordPress starter.`,
        author: `@tomphill`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /images/ // See below to configure properly
                }
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                minimizeDeprecationNotice: true,
                baseUrl: "http://localhost:10003/",
                protocol: "http",
                hostingWPCOM: false,
                useACF: false,
                verboseOutput: false,
                perPage: 100,
                concurrentRequests: 10,
                includedRoutes: [
                    "**/categories",
                    "**/posts",
                    "**/pages",
                    "**/media",
                    "**/tags",
                    "**/taxonomies",
                    "**/users",
                    "**/menus"
                ],
            },
        },
    ],
}
