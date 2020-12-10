import React from 'react';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from 'react-html-parser';

import MasterLayout from '../layouts/MasterLayout';
import MaterialContainer from '../components/common/MaterialContainer';
import Hero from '../components/Post/Hero';
import PostContent from '../components/Post/PostContent';
import CommentList from '../components/Post/CommentList';

export default ({ pageContext }) => {

    const { yoast_head, title, date, content, comments, featured_media } = pageContext;

    return (
        <MasterLayout>
            <Helmet>
                {ReactHtmlParser(yoast_head)}
            </Helmet>

            <h1 hidden={true}>{title}</h1>

            {featured_media ? <Hero imageData={featured_media} title={title} date={date} /> : null}

            <PostContent title={title} content={content} />

            <CommentList comments={comments} />
        </MasterLayout>
    );
}