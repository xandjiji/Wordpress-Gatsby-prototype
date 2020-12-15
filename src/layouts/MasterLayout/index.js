import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    body{margin:0;}a{text-decoration: none;}ul,ol{list-style-type:none}ul,ol,p,h1,h2,h3,h4,h5,h6{padding: 0;margin: 0;}fieldset{border: none;margin-inline-start: unset;margin-inline-end: unset;padding-block-start: unset;padding-inline-start: unset;padding-inline-end: unset;padding-block-end: unset;min-inline-size: unset;}figure{margin:0;}

    html, body {
        font-family: 'Roboto', sans-serif;
    }

    html {
        background-color: #3F51B5;
    }

    body {
        background-color: #fff;
    }

    .container {
        margin-left: 40px;
        margin-right: 40px;

        @media(min-width: 768px) {
            margin-left: 80px;
            margin-right: 80px;
        }

        @media(min-width: 1024px) {
            margin-left: 140px;
            margin-right: 140px;
        }

        @media(min-width: 1440px) {
            margin-right: calc((100vw - 1200px) / 2);
            margin-left: calc((100vw - 1200px) / 2);
        }

        @media(min-width: 1880px) {
            margin-right: calc((100vw - 1600px) / 2);
            margin-left: calc((100vw - 1600px) / 2);
        }
    }

    .negative-container {
        margin-left: -40px;
        margin-right: -40px;

        @media(min-width: 768px) {
            margin-left: -80px;
            margin-right: -80px;
        }

        @media(min-width: 1024px) {
            margin-left: -140px;
            margin-right: -140px;
        }

        @media(min-width: 1440px) {
            margin-right: calc((100vw - 1200px) / 2);
            margin-left: calc((100vw - 1200px) / 2);
        }

        @media(min-width: 1880px) {
            margin-right: calc(((100vw - 1200px) / 2) * -1);
            margin-left: calc(((100vw - 1200px) / 2) * -1);
        }
    }

    .inner-container {
        padding-left: 40px;
        padding-right: 40px;

        @media(min-width: 768px) {
            padding-left: 80px;
            padding-right: 80px;
        }

        @media(min-width: 1024px) {
            padding-left: 140px;
            padding-right: 140px;
        }

        @media(min-width: 1440px) {
            padding-right: calc((100vw - 1200px) / 2);
            padding-left: calc((100vw - 1200px) / 2);
        }

        @media(min-width: 1880px) {
            padding-right: calc((100vw - 1600px) / 2);
            padding-left: calc((100vw - 1600px) / 2);
        }
    }
`

const MasterLayout = ({ children }) => {
    const metaData = useStaticQuery(graphql`
        {
            allWordpressSiteMetadata {
                edges {
                    node {
                        id
                        description
                        home
                        name
                        url
                    }
                }
            }
        }
    `);


    const { name, description } = metaData.allWordpressSiteMetadata.edges[0].node;

    return (
        <>
            <Helmet
                title={name}
                meta={[
                    {
                        name: `description`,
                        content: description,
                    },
                    {
                        property: `og:title`,
                        content: name,
                    },
                    {
                        property: `og:description`,
                        content: description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:title`,
                        content: name,
                    },
                    {
                        name: `twitter:description`,
                        content: description,
                    },
                ]}
            >
                <html lang="pt-Br" />
            </Helmet>
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