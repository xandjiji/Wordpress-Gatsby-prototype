import React from 'react';

import MaterialContainer from '../../common/MaterialContainer';
import CommentItem from '../CommentItem';

export default ({ comments }) => {

    return (
        <MaterialContainer container={true} labelTag="Comments">
            {commentTreeBuilder(comments)}
        </MaterialContainer>
    )
}

const commentTreeBuilder = (array) => {

    array = array.sort((a, b) => a.id - b.id);

    const rootArray = array.filter(item => item.parent === 0);

    const renderCommentAndChildren = (item) => {
        const children = array.filter(comment => item.id === comment.parent);

        return (
            <CommentItem comment={item}>
                {children.map(childrenItem => renderCommentAndChildren(childrenItem))}
            </CommentItem>
        );
    }

    return rootArray.map(comment => renderCommentAndChildren(comment));
}