import React from 'react';

export default ({ comment, children }) => {

    const { content } = comment;

    return (
        <div style={{marginLeft: '30px'}}>
            <div dangerouslySetInnerHTML={{__html: content.rendered}}></div>
            {children}
        </div>
    )
}