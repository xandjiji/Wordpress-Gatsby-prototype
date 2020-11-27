import styled from 'styled-components';

export const MaterialContainer = styled.div`
    ${props => {        
        if(props.container) {
            return `
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
            `
        }
    }}

    padding: 12px 16px;
    margin-top: 24px;
    margin-bottom: 24px;
    position: relative;
    border-radius: 5px;
    box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.3);

    span {
        position: absolute;
        top: 0;
        left: 16px;
        transform: translateY(-50%);
        
        padding: 0 4px;
        background-color: #fff;        
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 0.6px;
    }
`;