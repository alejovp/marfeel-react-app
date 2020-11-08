import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackground } from './StyledBackGround';


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
