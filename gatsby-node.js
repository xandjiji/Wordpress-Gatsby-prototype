const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const { getPathname } = require('./src/utils/getPathname');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const pageBuilder = async (itemArray, templatePath) => {

        const pageTemplate = path.resolve(templatePath);

        await Promise.all(itemArray.map(edge => {
            createPage({
                path: `${getPathname(edge.node.link)}`,
                component: slash(pageTemplate),
                context: edge.node,
            })
        }));
    }

    /* PAGES */
    const pages = await graphql(`
        {
            allWordpressPage {
                edges {
                    node {
                        id
                        link
                        slug
                        status
                        template
                        title
                        content
                        template
                        yoast_head
                    }
                }
            }
        }
    `);

    await pageBuilder(pages.data.allWordpressPage.edges, './src/templates/Page.js');

    /* POSTS */
    const posts = await graphql(`
        {
            allWordpressPost {
                edges {
                    node {
                        id
                        link
                        title
                        slug
                        excerpt
                        content
                        yoast_head
                    }
                }
            }
        }
    `);

    await pageBuilder(posts.data.allWordpressPost.edges, './src/templates/Post.js');

    /* CATEGORIES */
    const categories = await graphql(`
        {
            allWordpressCategory {
                edges {
                    node {
                        id
                        link
                        slug
                        name
                        wordpress_parent
                        yoast_head
                    }
                }
            }
        }
    `);

    await pageBuilder(categories.data.allWordpressCategory.edges, './src/templates/Category.js');

    /* SEARCH */

    const searchData = await graphql(`
        {
            allWordpressPost {
                edges {
                    node {
                        id
                        title
                        link
                        excerpt
                        content

                        featured_media {
                            title
                            alt_text

                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 300) {
                                        aspectRatio,
                                        base64,
                                        sizes,
                                        src,
                                        srcSet
                                    }
                                }
                            }
                        }

                        categories {
                            id
                            name
                            link
                        }
                    }
                }
            }
        }
    `);

    createPage({
        path: `/search`,
        component: path.resolve('./src/templates/Search.js'),
        context: {
            postData: {
                allPosts: searchData.data.allWordpressPost.edges,
                options: {
                    indexStrategy: 'Prefix match',
                    searchSanitizer: 'Lower Case',
                    TitleIndex: true,
                    AuthorIndex: true,
                    SearchByTerm: true
                }
            }
        }
    });
}