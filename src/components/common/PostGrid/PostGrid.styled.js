import styled from 'styled-components';

export const PostGrid = styled.ul`
    padding: 12px 6px;

    li:not(:last-child) {
        margin-bottom: 36px;
    }

    .thumbnail {
        height: 300px;
    }

    @media(min-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            width: calc(50% - 16px);

            &:last-child:nth-child(2n - 1) {
                width: 100%;
            }

            > * {
                height: 100%;
            }
        }
    }
`;