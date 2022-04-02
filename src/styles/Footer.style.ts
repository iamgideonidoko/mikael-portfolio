import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background: #00000000;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    z-index: 3;

    & > div:nth-child(1) {
        font-size: 13px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        /* grid-gap: 4px; */
        margin-left: 58px;
        font-weight: 600;
        padding-bottom: 15px;
        letter-spacing: 0.13px;
        line-height: 20.8px;
        text-transform: uppercase;
    }

    & > div:nth-child(2) {
        height: 100%;
        width: 100px;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 10px;
    }
`;
