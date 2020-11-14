import styled from 'styled-components';
import { BURGER_BUTTON_SIZE } from '../../internals/constants';

export const StyledBurgerButton = styled.button`
    position: absolute;
    left: ${({theme}) => theme.header.padding}px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: ${BURGER_BUTTON_SIZE}px;
    height: ${BURGER_BUTTON_SIZE}px;
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
