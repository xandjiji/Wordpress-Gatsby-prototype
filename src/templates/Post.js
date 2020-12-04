import React from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import MasterLayout from '../layouts/MasterLayout';
import MaterialContainer from '../components/common/MaterialContainer';
import CommentList from '../components/Post/CommentList';

export default ({ pageContext }) => {

    const { yoast_head, title, content, comments } = pageContext;

    return (
        <MasterLayout>
            <Helmet>
                {ReactHtmlParser(yoast_head)}
            </Helmet>

            <MaterialContainer container={true} labelTag="Content">
                <section>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </section>
            </MaterialContainer>

            <CommentList comments={comments} />
        </MasterLayout>
    );
}