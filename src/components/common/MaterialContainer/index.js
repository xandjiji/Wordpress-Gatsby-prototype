import React from 'react';
import { MaterialContainer } from './MaterialContainer.styled';

export default ({ children, labelTag, container }) => {
    return (
        <MaterialContainer container={container}>
            {labelTag ? <span>{labelTag}</span> : null}
            {children}
        </MaterialContainer>
    )
}