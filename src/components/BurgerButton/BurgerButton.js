import React from 'react';
import { StyledBurgerButton } from './StyledBurgerButton';
import { StyledBurgerDiv } from './StyledBurgerDiv';

export const BurgerButton = () => {
    return (
        <StyledBurgerButton>
            <StyledBurgerDiv />
            <StyledBurgerDiv />
            <StyledBurgerDiv />
        </StyledBurgerButton>
    );
};
