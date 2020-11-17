import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLogo } from './StyledLogo';

export const Logo = () => {
    const { logo } = useContext(ThemeContext);

    return (
        <StyledLogo>
            <img src={logo.image} />
        </StyledLogo>
    );
};
