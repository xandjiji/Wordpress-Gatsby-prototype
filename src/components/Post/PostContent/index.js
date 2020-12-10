import React from 'react';
import PostContent from './PostContent.styled';
import MaterialContainer from '../../common/MaterialContainer';

export default ({ title, content }) => {

    return (
        <PostContent>
            <MaterialContainer container={true} labelTag={title}>
                <section>
                    <div className="content-wrapper" dangerouslySetInnerHTML={{ __html: content }}></div>
                </section>
            </MaterialContainer>
        </PostContent>
    )
}