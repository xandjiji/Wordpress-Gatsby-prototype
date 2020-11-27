import React from 'react';
import { createGlobalStyle } from 'styled-components';

import '../../fonts/SulSans.css'

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    body{margin:0;}a{text-decoration: none;}ul{list-style-type:none}ul,ol,p,h1,h2,h3,h4,h5,h6{padding: 0;margin: 0;}fieldset{border: none;margin-inline-start: unset;margin-inline-end: unset;padding-block-start: unset;padding-inline-start: unset;padding-inline-end: unset;padding-block-end: unset;min-inline-size: unset;}

    html, body {
        font-family: 'Roboto', sans-serif;
    }
`

const MasterLayout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <main>
                <Header />
                {children}
            </main>

            <Footer />
        </>
    );
}

export default MasterLayout