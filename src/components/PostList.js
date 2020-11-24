import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

export default () => {
    const query = useStaticQuery(
        graphql`
            {
                allWordpressPost {
                    edges {
                        node {
                            id
                            title
                            slug
                        }
                    }
                }
            }
        `
    )

    return (
        <div className="post-list">
            <h1>Posts:</h1>
            <ul>
                {query.allWordpressPost.edges.map(post => {

                    const { id, title, slug } = post.node;

                    return (
                        <li key={id}>
                            <Link to={`/post/${slug}`}>
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}