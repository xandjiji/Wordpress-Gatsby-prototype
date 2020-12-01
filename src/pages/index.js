import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MasterLayout from '../layouts/MasterLayout';

import SearchBar from '../components/common/SearchBar';
import PostGrid from '../components/common/PostGrid';

const IndexPage = () => {
    const query = useStaticQuery(
        graphql`
            {
                allWordpressPost {
                    edges {
                        node {
                            id
                            title
                            link
                            excerpt

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

                allWordpressPage {
                    edges {
                        node {
                            id
                            title
                            link
                        }
                    }
                }
            }
        `
    );

    return (
        <MasterLayout>
            <SearchBar />
            <PostGrid title="Posts" itemArray={query.allWordpressPost.edges} />
            <PostGrid title="Pages" itemArray={query.allWordpressPage.edges} />
        </MasterLayout>
    )
}

export default IndexPage