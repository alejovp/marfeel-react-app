import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './StyledLink';


export const SideNavLink = ({ section, isActive, onClick }) => {

    const onClickHandler = useCallback(() => onClick(section.id), []);

    return (
        <StyledLink href="#"
                    isActive={isActive}
                    onClick={onClickHandler}>
            {section.text}
        </StyledLink>
    );
};

SideNavLink.propTypes = {
    section: PropTypes.object,
    isActive: PropTypes.bool,
    onClick: PropTypes.func
};
