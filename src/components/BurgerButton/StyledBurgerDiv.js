import styled from 'styled-components';

export const StyledBurgerDiv = styled.div`
    width: 28px;
    height: 4px;
    background: ${({ theme }) => theme.burgerButton && theme.burgerButton.color || 'black'};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
`;

StyledBurgerDiv.displayName = 'StyledBurgerDiv';
