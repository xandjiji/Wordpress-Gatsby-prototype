import styled from 'styled-components';

export const PostCard = styled.div`
    border-radius: 5px;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.3);
    overflow: hidden;
    transition: box-shadow 0.2s ease-out;

    &:hover {
        box-shadow: 2px 2px 5px 3px rgba(0,0,0,0.4);
    }

    .thumbnail {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.39);
        }
    }

    .post-card-body {
        padding: 24px 16px;

        .category-wrapper {
            display: flex;
            flex-wrap: wrap;

            a {
                span {
                    display: block;
                    padding: 6px 12px;
                    margin-bottom: 8px;
                    border-radius: 16px;
                    background-color: #C5CAE9;

                    font-size: 12px;
                    color: #000000;

                    transition: box-shadow 0.2s ease-out;

                    &:hover {
                        box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);
                    }
                }
                &:not(:last-child) {
                    margin-right: 8px;
                }
            }
        }

        .title {
            margin: 16px 0;
            color: #3F51B5;
            font-size: 24px;
        }

        .excerpt {
            font-size: 16px;
        }
    }
`;