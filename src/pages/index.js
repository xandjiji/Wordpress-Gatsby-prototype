import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MasterLayout from '../layouts/MasterLayout';

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
            <PostGrid title="Posts" itemArray={query.allWordpressPost.edges} />
            <PostGrid title="Pages" itemArray={query.allWordpressPage.edges} />
        </MasterLayout>
    )
}

export default IndexPage