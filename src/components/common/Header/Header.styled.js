import styled from 'styled-components';

export const HeaderStyled = styled.div`
    position: relative;
    z-index: 50;
    padding: 16px 40px;
    background-color: #3F51B5;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.3);

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a.active {
            border-bottom: solid 1px #ffffff99;
        }

        h1 {
            text-transform: uppercase;
            font-size: 24px;
            font-weight: 400;
            letter-spacing: 2px;
        }

        nav {
            flex-grow: 1;

            ul {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height: 100%;

                li {
                    position: relative;

                    a {
                        padding: 8px 0;
                        text-transform: uppercase;
                        font-size: 10px;
                        font-weight: 700;
                        letter-spacing: 0.6px;

                        transition: 0.2s ease-out;

                        &:hover {
                            opacity: 0.7;
                        }
                    }

                    &:not(:last-child) {
                        margin-right: 16px;
                    }

                    &:hover ul {
                        opacity: 1;
                        pointer-events: unset;
                    }

                    ul {
                        display: block;
                        padding: 6px 8px;
                        position: absolute;
                        top: calc(100% + 6px);
                        left: 0;
                        height: unset;
                        width: max-content;
                        border-radius: 5px;
                        box-shadow: 2px 2px 5px 3px rgba(0,0,0,0.4);
                        background-color: #fff;

                        opacity: 0;
                        pointer-events: none;
                        transition: 0.2s ease-out;

                        li {
                            padding: 0;
                            margin: 0 !important;

                            &:not(:last-child) {
                                margin-bottom: 8px !important;
                            }
                            a {
                                color: #000;
                                font-weight: 400;
                            }
                        }
                    }
                }
            }
        }
    }
    

    a {
        color: #fff;
    }

    @media(min-width: 768px) {
        padding-left: 80px;
        padding-right: 80px;
    }

    @media(min-width: 1024px) {
        padding-left: 140px;
        padding-right: 140px;
    }

    @media(min-width: 1440px) {
        padding-right: calc((100vw - 1200px) / 2);
        padding-left: calc((100vw - 1200px) / 2);
    }

    @media(min-width: 1880px) {
        padding-right: calc((100vw - 1600px) / 2);
        padding-left: calc((100vw - 1600px) / 2);
    }
`;