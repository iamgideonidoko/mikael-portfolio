import styled from 'styled-components';

export const HamburgerWrapper = styled.button`
    width: 24px;
    height: 24px;
    display: flex;
    background: transparent;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border: none;

    & > div {
        height: 3px;
        width: 100%;
        background: white;
        border-radius: 10px;
    }
`;
