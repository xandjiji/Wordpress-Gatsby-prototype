import styled from 'styled-components';

export default styled.div`
    margin-top: 36px;
    margin-left: 40px;
    margin-right: 40px;

    @media(min-width: 768px) {
        margin-left: 80px;
        margin-right: 80px;
    }

    @media(min-width: 1024px) {
        margin-left: 140px;
        margin-right: 140px;
    }

    @media(min-width: 1440px) {
        margin-right: calc((100vw - 1200px) / 2);
        margin-left: calc((100vw - 1200px) / 2);
    }

    @media(min-width: 1880px) {
        margin-right: calc((100vw - 1600px) / 2);
        margin-left: calc((100vw - 1600px) / 2);
    }

    display: flex;
    align-items: center;
    border-radius: 5px;
    border: solid 1px #B4B4B4;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.14);
    overflow: hidden;

    input {
        padding: 6px 16px;
        box-sizing: border-box;
        flex-grow: 1;
        outline: none;
        transition: 0.2s ease-out;
        border: none;
    }

    a {
        padding: 5px 12px;
        background-color: #3F51B5;
        svg {
            transform: translate(0, 1px);
        }
    }
`;