import React from 'react';
import { useStaticQuery, Link } from 'gatsby';

const Header = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }`
    );

    return (

        <header>
            <div>
                <h1>
                    <Link to="/">
                        {data.site.siteMetadata.title}
                    </Link>
                </h1>
            </div>
        </header>
    );
}

export default Header
