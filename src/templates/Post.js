import React from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';
import MasterLayout from '../layouts/MasterLayout';

export default ({ pageContext }) => {

    const { title, yoast_head } = pageContext;

    return (
        <MasterLayout>
            <Helmet>
                { ReactHtmlParser(yoast_head) }
            </Helmet>

            <h1>{title}</h1>
        </MasterLayout>
    );
}