import styled from 'styled-components';

export const PostGrid = styled.div`
    padding: 12px 6px;

    .cursor {
        width: 100%;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 12px;
        letter-spacing: 1px;

        button {
            padding: 3px 8px;
            margin-left: 6px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
            box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);
            transition: opacity 0.2s ease-out;
            transition: box-shadow 0.2s ease-out;
            user-select: none;

            &:hover {
                box-shadow: 2px 2px 5px 3px rgba(0,0,0,0.14);
            }

            &:active {
                box-shadow: inset 2px 2px rgba(0,0,0,0.14);
            }

            &.disabled {
                opacity: 0;
                pointer-events: none;
            }
        }
    }

    li:not(:last-child) {
        margin-bottom: 36px;
    }

    .thumbnail {
        height: 300px;
    }

    @media(min-width: 1024px) {

        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            li {
                width: calc(50% - 16px);

                &:last-child {
                    margin-bottom: 36px;
                }

                &:last-child:nth-child(2n - 1) {
                    width: 100%;
                }

                > * {
                    height: 100%;
                }
            }
        }
    }
`;