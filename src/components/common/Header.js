import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import { getPathname } from '../../utils/getPathname';

const Header = () => {
    const menu = useStaticQuery(graphql`
        {
            allWordpressWpApiMenusMenusItems {
                edges {
                    node {
                        items {
                            title
                            url

                            wordpress_children {
                                title
                                url
                            }
                        }
                    }
                }
            }
        }`
    );

    const teste = RecursiveUL(menu.allWordpressWpApiMenusMenusItems.edges[0].node.items);

    return (

        <header>
            <div>
                <h1>
                    <Link to="/">
                        Home
                    </Link>
                </h1>

                {teste}
            </div>

            <nav>
                <ul>
                    
                </ul>
            </nav>
        </header>
    );
}

const RecursiveUL = (itemArray) => {
    if(Array.isArray(itemArray)) {
        return (
            <ul>
                {itemArray.map(element => (
                    <li>
                        <Link to={getPathname(element.url)}>
                            {element.title}
                        </Link>

                        {RecursiveUL(element.wordpress_children)}
                    </li>
                ))}
            </ul>
        )
    }
}

/* const stripeLocalhost = (url) => {
    const urlObj = new URL(url);
    return urlObj.pathname;
} */

export default Header
