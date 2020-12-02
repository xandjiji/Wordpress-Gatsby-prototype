import React, { useState, useEffect } from 'react';

import MaterialContainer from '../MaterialContainer';
import { PostGrid } from './PostGrid.styled';
import PostCard from '../PostCard';

export default ({ title, itemArray, itemsPerPage }) => {

    if (itemsPerPage < 1 || itemsPerPage === undefined || itemsPerPage > itemArray.length) {
        itemsPerPage = 1;
    }

    const slicePosts = (index) => {
        return itemArray.slice(index * itemsPerPage, (index * itemsPerPage) + itemsPerPage);
    }

    const [index, setIndex] = useState(0);
    const [postList, setPostlist] = useState(slicePosts(0));

    useEffect(() => {
        setPostlist(slicePosts(index));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemArray])

    useEffect(() => {
        setPostlist(slicePosts(index));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index])

    const handleSetIndex = (newValue) => {
        if (newValue >= 0 && newValue < (itemArray.length / itemsPerPage)) {
            setIndex(newValue);
        }
    }

    return (
        <MaterialContainer labelTag={title} container={true}>

            <PostGrid>
                <div className="cursor">
                    {`${index * itemsPerPage + (postList.length)} of ${itemArray.length} posts`}
                    <button className={index === 0 ? `disabled` : ''} onClick={() => handleSetIndex(index - 1)}>{`<`}</button>
                    <button className={index + 1 === Math.ceil(itemArray.length / itemsPerPage) ? `disabled` : ''} onClick={() => handleSetIndex(index + 1)}>{`>`}</button>
                </div>

                {postList.map(item => {

                    let currentItem;

                    if (item.node) {
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