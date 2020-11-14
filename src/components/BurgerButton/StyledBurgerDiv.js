import styled from 'styled-components';
import { BURGER_BUTTON_SIZE } from '../../internals/constants';

export const StyledBurgerDiv = styled.div`
    width: ${BURGER_BUTTON_SIZE}px;
    height: 4px;
    background: ${({ theme }) => theme.burgerButton && theme.burgerButton.color || 'black'};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
`;

StyledBurgerDiv.displayName = 'StyledBurgerDiv';
