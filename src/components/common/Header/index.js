import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { getPathname } from '../../../utils/getPathname';

import { HeaderStyled } from './Header.styled';

const Header = () => {
    const menu = useStaticQuery(graphql`
        {
            allWordpressWpApiMenusMenusItems {
                edges {
                    node {
                        items {
                            object_id
                            title
                            url

                            wordpress_children {
                                object_id
                                title
                                url
                            }
                        }
                    }
                }
            }
        }`
    );

    return (
        <HeaderStyled>
            <header>
                <h1>
                    <Link to="/" activeClassName="active">My Blog</Link>
                </h1>

                <nav>
                    {RecursiveUL(menu.allWordpressWpApiMenusMenusItems.edges[0].node.items)}
                </nav>
            </header>
        </HeaderStyled>
    );
}

const RecursiveUL = (itemArray) => {
    if (Array.isArray(itemArray)) {
        return (
            <ul>
                {itemArray.map(element => (
                    <li key={element.object_id}>
                        <Link to={getPathname(element.url)} activeClassName="active">
                            {element.title}
                        </Link>

                        {RecursiveUL(element.wordpress_children)}
                    </li>
                ))}
            </ul>
        )
    }
}

export default Header
