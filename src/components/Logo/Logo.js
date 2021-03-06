import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { StyledLogo } from './StyledLogo';


export const Logo = ({ grayScaled, size }) => {
    const { logo } = useContext(ThemeContext);

    return (
        <StyledLogo size={size}
                    grayScaled={grayScaled}>
            <img src={logo.image} />
        </StyledLogo>
    );
};

Logo.propTypes = {
    grayScaled: PropTypes.bool,
    size: PropTypes.number
};
