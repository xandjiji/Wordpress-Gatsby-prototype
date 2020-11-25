import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { getPathname } from '../utils/getPathname';

export default () => {
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
            }
        `
    )

    return (
        <div className="post-list">
            <h1>Posts:</h1>
            <ul>
                {query.allWordpressPost.edges.map(post => {

                    const { id, title, link } = post.node;

                    return (
                        <li key={id}>
                            <Link to={getPathname(link)}>
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}