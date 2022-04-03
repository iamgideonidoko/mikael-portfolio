import styled from 'styled-components';

interface Props {
    isDark: boolean;
}

export const HeaderWrapper = styled.div<Props>`
    /* background: #00000020; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 54px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
    color: ${(props) => (props.isDark ? 'white' : 'black')};

    & .logo {
        img {
            width: 97px;
        }

        h2 {
            font-size: 32px;
        }
    }

    & > div:nth-child(1) {
        display: flex;
        align-items: center;
        grid-gap: 4rem;

        & > ul {
            display: flex;
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
