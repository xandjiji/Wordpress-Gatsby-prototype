import React from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import MasterLayout from '../layouts/MasterLayout';

export default ({ pageContext }) => {

    const { yoast_head, title, content } = pageContext;

    return (
        <MasterLayout>
            <Helmet>
                {ReactHtmlParser(yoast_head)}
            </Helmet>

            <section>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </section>
        </MasterLayout>
    );
}