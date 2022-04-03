import { basePageStyle } from './general.style';
import styled from 'styled-components';

export const ServicesWrapper = styled.div`
    ${basePageStyle}
    border: 1px solid red;
    z-index: 9;
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 100px 54px;
    grid-gap: 2rem;

    & > div:nth-child(1) {
        padding-left: 140px;
        & > span {
            display: block;
        }

        & > span:nth-child(1) {
            font-size: 120px;
            line-height: 120px;
            font-weight: 700;
            color: #c3323a;
            letter-spacing: -2.4px;

            & > sup {
                font-size: 40px;
                display: inline-block;
                padding: 0;
                transform: translateY(-1rem);
            }
        }

        & > span:nth-child(2) {
            font-size: 22px;
            font-weight: 700;
            line-height: 34.1px;
            letter-spacing: -0.44px;
        }
    }

    & > div:nth-child(2) {
        & > h4 {
            font-size: 32px;
            line-height: 44.8px;
            font-weight: 700;
            letter-spacing: -0.64px;
            & > span {
                color: #c3323a;
            }
        }

        & > ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            border: 1px solid red;
            grid-gap: 40px;
        }
    }
`;
