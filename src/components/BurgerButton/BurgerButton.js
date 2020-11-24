import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledBurgerButton } from './StyledBurgerButton';
import { StyledBurgerDiv } from './StyledBurgerDiv';
import { StyledFloatingCircle } from './StyledFloatingCircle';
import { ThemeContext } from 'styled-components';
import {
    APP_BAR_HEIGHT,
    BURGER_BUTTON_SIZE,
    FLOATING_CIRCLE_PADDING
} from '../../internals/constants';


export const BurgerButton = ({ onClick }) => {
    const { header } = useContext(ThemeContext);

    return (
        <StyledFloatingCircle
            top={((APP_BAR_HEIGHT - BURGER_BUTTON_SIZE) / 2) - FLOATING_CIRCLE_PADDING}
            left={header && header.padding}
        >
            <StyledBurgerButton onClick={onClick}>
                <StyledBurgerDiv />
                <StyledBurgerDiv />
                <StyledBurgerDiv />
            </StyledBurgerButton>
        </StyledFloatingCircle>
    );
};

BurgerButton.propTypes = {
    onClick: PropTypes.func
};
