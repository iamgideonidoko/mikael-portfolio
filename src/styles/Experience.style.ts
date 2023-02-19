import styled from 'styled-components';
import { basePageStyle } from './general.style';
import { viewTransition } from './variables.style';

interface Props {
  elevated: boolean;
}

export const ExperienceWrapper = styled.div<Props>`
  ${basePageStyle}
  transform: ${(props: Props) => (props.elevated ? 'translateY(-100%)' : 'translateY(0%)')};
  padding: 100px 54px;
  background-color: salmon;
  z-index: 8;
  position: relative;

  .experience-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    z-index: 0;

    img {
      display: block;
      transform: scale(1.5);
      transition: ${viewTransition('transform', 5, 0)};
    }

    &.view-active {
      img {
        transform: scale(1);
      }
    }
  }

  .experience-container {
    position: relative;
    color: white;
    padding: 0 140px;
    height: 100%;

    & > div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 1rem;

      h1 {
        font-size: 58px;
        line-height: 66px;
        font-weight: 700px;
      }

      & > div {
        font-size: 20px;
      }
    }

    & > table {
      border-collapse: collapse;
      margin-top: 1rem;

      tbody {
        tr {
          &:not(:last-child) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.7) !important;
          }
          td {
            padding: 2rem 4rem 2rem 0;
            min-width: 10rem;

            &:first-child {
              font-size: 17px;
              font-weight: 700;
            }

            &:nth-child(2) {
              font-size: 20px;
              font-weight: 700;
            }
            &:last-child {
              font-size: 15px;
              color: #999999;
              line-height: 25.5px;
            }
          }
        }
      }
    }

    & > .resume-btn {
      background-color: #c3323a;
      color: white;
      border: none;
      padding: 0.8rem 1.2rem;
      border-radius: 4px;
      display: inline-block;
      margin-top: 1rem;
      cursor: pointer;
    }
  }
`;
