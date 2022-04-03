import styled from 'styled-components';
import homeBgImage from '../assets/images/home-bg-img.png';
import { basePageStyle } from './general.style';

interface Props {
    elevated: boolean;
}

export const HomeWrapper = styled.div<Props>`
    ${basePageStyle}
    transform: ${(props: Props) => (props.elevated ? 'translateY(-100%)' : 'translateY(0%)')};
    background: #b4000b;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    padding-left: 140px;
    z-index: 10;

    & > div:nth-child(1) {
        z-index: 2;
        & > h5 {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.13px;
            font-weight: 600px;
        }

        & > h1 {
            font-size: 80px;
            font-weight: 300px;
            letter-spacing: -1.6px;
            line-height: 92px;
            margin-bottom: 40px;
            margin-top: 10px;
        }

        & .resume-link {
            display: inline-block;
            color: white;
            text-decoration: none;
            margin-top: 40px;
            position: relative;
            font-size: 20px;
            font-weight: 600;
            letter-spacing: -0.2px;
            line-height: 34px;

            &:hover::before {
                width: 40px;
            }

            &::before {
                content: '';
                width: 50px;
                height: 2px;
                background-color: white;
                display: inline-block;
                border-radius: 10px;
                margin-bottom: 5px;
                margin-right: 15px;
                transition: width 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
            }
        }
    }

    & .home-bg-wrapper {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    & .home-img-bg {
        background-image: url(${homeBgImage});
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background-size: cover;
        background-repeat: no-repeat;
        width: 34rem;
        z-index: 1;
    }

    & .home-circle-bg {
        position: absolute;
        width: 65rem;
        height: 65rem;
        bottom: -25rem;
        right: -22rem;
        background-color: #ab010d;
        border-radius: 100rem;
        z-index: 0;
    }
`;

export const StatCard = styled.div`
    height: 72px;
    width: 197px;
    padding: 15px 30px 15px 20px;
    display: inline-flex;
    box-sizing: rgba(255, 255, 255, 0.1) 0px -2px 0px 0px inset;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.15);
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    justify-content: space-between;
    align-items: center;

    &:last-of-type {
        margin-left: 1rem;
    }

    & > span {
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -0.8px;
        line-height: 40px;
        display: inline-block;
    }

    & > h5 {
        line-height: 20px;
    }
`;
