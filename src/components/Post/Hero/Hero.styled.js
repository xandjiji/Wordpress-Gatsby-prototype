import styled from 'styled-components';

export default styled.div`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.60);
    }

    .text-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);

        span {
            display: block;
            color: #fff;
            text-align: center;
            font-weight: 700;
        }

        .title {
            margin-bottom: 16px;
            font-size: 36px;
            letter-spacing: 0.5px;
        }

        .date {
            letter-spacing: 1px;
        }
    }


    .gatsby-image-wrapper {
        height: 300px;
    }
`;