import styled from 'styled-components';

export const StyledBurgerButton = styled.button`
    position: absolute;
    left: ${({theme}) => theme.header.padding}px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 28px;
    height: 28px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    &:focus {
        outline: none;
    }
`;

StyledBurgerButton.displayName = 'StyledBurgerButton';
