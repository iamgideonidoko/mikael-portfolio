import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    /* background: #00000020; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 54px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;

    & .logo {
        img {
            width: 97px;
        }
    }

    & > div:nth-child(1) {
        display: flex;
        align-items: center;
        grid-gap: 4rem;

        & > ul {
            display: flex;
            color: white;
            font-size: 13px;
            grid-gap: 1rem;
            opacity: 0.8;

            a {
                color: inherit;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }
`;
