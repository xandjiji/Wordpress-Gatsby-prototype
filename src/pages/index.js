import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {

    const query = useStaticQuery(
        graphql`
            {
                allWordpressPost {
                    edges {
                        node {
                            id
                            title
                        }
                    }
                }
            }
        `
    )

    return (
        <Layout>
            <SEO title="Home" />

            <ul>
                {query.allWordpressPost.edges.map(post => (
                    <li key={post.node.id}>
                        {post.node.title}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default IndexPage
