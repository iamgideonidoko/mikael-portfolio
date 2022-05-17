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
        padding-right: 7rem;
        & > h4 {
            font-size: 32px;
            line-height: 44.8px;
            font-weight: 700;
            letter-spacing: -0.64px;
            & > span {
                color: #c3323a;
            }
        }

        & > .main-services {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-gap: 40px 80px;
            margin-top: 70px;

            & > li {
                a:first-child {
                    color: black;
                    font-weight: 700;
                    text-decoration: none;
                    font-size: 24px;
                    line-height: 33.6px;
                    letter-spacing: -0.48px;
                    display: block;
                    margin-bottom: 0.4rem;
                }

                p {
                    font-size: 16px;
                    line-height: 27.2px;
                    color: rgba(92, 92, 92);
                }

                a:last-child {
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.13px;
                    line-height: 20.8px;
                    color: #c3323a;
                    text-transform: uppercase;
                    text-decoration: none;
                    display: block;
                    margin-top: 0.7rem;
                    transform: translateY(0.8rem);
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
                }

                &:hover {
                    a:last-child {
                        transform: translateY(0rem);
                        opacity: 1;
                        pointer-events: auto;
                    }
                }
            }
        }
    }
`;
