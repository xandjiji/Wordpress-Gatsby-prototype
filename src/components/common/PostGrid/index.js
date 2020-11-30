import React from 'react';

import MaterialContainer from '../MaterialContainer';
import { PostGrid } from './PostGrid.styled';
import PostCard from '../PostCard';

export default ({ title, itemArray }) => {
    return (
        <MaterialContainer labelTag={title} container={true}>
            <PostGrid>
                {itemArray.map(item => {

                    const { id } = item.node;

                    return (
                        <li key={id}>
                            <PostCard post={item.node} />
                        </li>
                    )
                })}
            </PostGrid>
        </MaterialContainer>
    )
}