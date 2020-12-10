import React from 'react';
import Footer from './Footer.styled';

export default () => {
    return (
        <Footer className="inner-container">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
    )
}