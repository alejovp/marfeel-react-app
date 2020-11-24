import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackground } from './StyledBackground';


export const Background = ({ children, ...rest }) => {
    return (
        <StyledBackground {...rest} >
            {children}
        </StyledBackground>
    );
};

Background.propTypes = {
    children: PropTypes.node
};
