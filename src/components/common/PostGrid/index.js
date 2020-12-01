import React from 'react';

import MaterialContainer from '../MaterialContainer';
import { PostGrid } from './PostGrid.styled';
import PostCard from '../PostCard';

export default ({ title, itemArray }) => {
    return (
        <MaterialContainer labelTag={title} container={true}>
            <PostGrid>
                {itemArray.map(item => {

                    let currentItem;

                    if(item.node) {
                        currentItem = item.node;
                    } else {
                        currentItem = item;
                    }

                    const { id } = currentItem;

                    return (
                        <li key={id}>
                            <PostCard post={currentItem} />
                        </li>
                    )
                })}
            </PostGrid>
        </MaterialContainer>
    )
}