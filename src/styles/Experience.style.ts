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
        height: 100%;
        overflow-x: hidden;
        z-index: 0;

        img {
            display: inline-block;
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
    }
`;
