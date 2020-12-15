const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const fetch = require('node-fetch');

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
    /* const pages = await graphql(`
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

    await pageBuilder(pages.data.allWordpressPage.edges, './src/templates/Page.js'); */

    /* POSTS */
    const posts = await graphql(`
        {
            allWordpressPost {
                edges {
                    node {
                        id
                        wordpress_id
                        link
                        title
                        slug
                        date
                        excerpt
                        content
                        yoast_head

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
                                        srcSet,
                                        srcSetWebp,
                                        srcWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const finalPosts = await Promise.all(posts.data.allWordpressPost.edges.map(async (postItem) => {
        const response = await fetch(`http://localhost/wp-json/wp/v2/comments?post=${postItem.node.wordpress_id}`)
        const commentsData = await response.json();
        return {
            node: {
                ...postItem.node,
                comments: commentsData
            }
        }
    }));

    await pageBuilder(finalPosts, './src/templates/Post.js');

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
                                        srcSet,
                                        srcSetWebp,
                                        srcWebp
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