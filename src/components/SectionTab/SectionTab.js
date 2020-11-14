import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyledSectionTab } from './StyledSectionTab';

export const SectionTab = ({ section = {}, onClick, currentSection }) => {

    const onClickHandler = useCallback(
        () => onClick(section.id), [onClick]
    );

    if (!section.id || !section.text) {
        return null;
    }

    const isActive = section.id === currentSection;

    return (
        <StyledSectionTab onClick={onClickHandler}
                          isActive={isActive}>
            <a>{section.text}</a>
        </StyledSectionTab>
    );
};

SectionTab.propTypes = {
    section: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    currentSection: PropTypes.string
};
