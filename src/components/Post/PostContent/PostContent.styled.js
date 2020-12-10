import styled from 'styled-components';

export default styled.div`
    section {
        margin-top: 8px;

        .content-wrapper {
            > * {
                margin-bottom: 16px;
            }

            img {
                width: 100%;
                max-height: 600px;
                object-fit: cover;
            }

            a {
                color: #3F51B5;
                transition: 0.2s ease-out;

                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
`;