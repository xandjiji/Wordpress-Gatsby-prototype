import styled from 'styled-components';

export default styled.li`
    ol {
        padding-left: 24px;
        margin-bottom: 24px;
        border-left: solid 2px #B4B4B4;
    }

    .comment-header {
        display: flex;
        align-items: center;
        font-size: 14px;

        img {
            margin-right: 6px;
            border-radius: 50%;
        }

        .author {
            margin-right: 6px;
            font-size: 14px;
            font-weight: 600;
            color: #3F51B5;

            &::after {
                content: ',';
                color: #000;
                opacity: 0.5;
            }
        }

        .date {
            opacity: 0.7;
        }
    }

    .comment-content {
        margin-bottom: 12px;
    }
`;