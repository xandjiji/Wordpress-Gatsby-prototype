import React from 'react';
import CommentItem from './CommentItem.styled';

export default ({ comment, children }) => {

    const { author_name, author_avatar_urls, date, content } = comment;

    const dateObj = new Date(date);
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];



    return (
        <CommentItem>
            <div className="comment-header">
                <img src={author_avatar_urls['24']} alt={author_name} />
                <span className="author">{author_name}</span>
                <span className="date">{monthNames[dateObj.getMonth()]} {dateObj.getDay()}/{dateObj.getFullYear()}</span>
            </div>
            <div className="comment-content" dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
            {children.length > 0 ?
                <ol>
                    {children}
                </ol>
                :
                null
            }
        </CommentItem>
    )
}