import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

export default () => {
    const query = useStaticQuery(
        graphql`
            {
                allWordpressPage {
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
        <div className="page-list">
            <h1>Pages:</h1>
            <ul>
                {query.allWordpressPage.edges.map(page => {

                    const { id, title, slug } = page.node;

                    return (
                        <li key={id}>
                            <Link to={`/${slug}`}>
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}