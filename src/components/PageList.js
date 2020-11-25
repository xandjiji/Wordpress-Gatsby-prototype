import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { getPathname } from '../utils/getPathname';

export default () => {
    const query = useStaticQuery(
        graphql`
            {
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
    )

    return (
        <div className="page-list">
            <h1>Pages:</h1>
            <ul>
                {query.allWordpressPage.edges.map(page => {

                    const { id, title, link } = page.node;

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