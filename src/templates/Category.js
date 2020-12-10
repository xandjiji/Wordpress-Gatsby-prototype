import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import MasterLayout from '../layouts/MasterLayout';
import PageHero from '../components/common/PageHero';
import PostGrid from '../components/common/PostGrid';
import SearchBar from '../components/common/SearchBar';

export default ({ pageContext }) => {

    const { yoast_head, id, name } = pageContext;

    const query = useStaticQuery(
        graphql`
            {
                allWordpressPost {
                    edges {
                        node {
                            id
                            slug
                            title
                            link
                            excerpt

                            featured_media {
                                title
                                alt_text

                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 300) {
                                            ...GatsbyImageSharpFluid
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
          
        `
    );

    const filteredPosts = query.allWordpressPost.edges.filter(item => {
        for(const category of item.node.categories) {
            if(category.id === id) {
                return item;
            }
        }

        return false;
    })

    return (
        <MasterLayout>
            <Helmet>
                {ReactHtmlParser(yoast_head)}
            </Helmet>
            <PageHero text="Category" />
            <SearchBar />

            <section>
                <PostGrid title={`Posts from '${name}'`} itemArray={filteredPosts} itemsPerPage={2} />
            </section>
        </MasterLayout>
    );
}