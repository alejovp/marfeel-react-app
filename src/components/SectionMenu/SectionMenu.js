import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledSectionMenu } from './StyledSectionMenu';
import { SectionTab } from '../SectionTab';
import { useElemDimensions } from '../../hooks';
import { DispatchContext } from '../../contexts/AppStore';
import { setMenuSectionHeight } from '../../contexts/actions';


export const SectionMenu = ({ sections = [], hideSectionMenu }) => {
    const dispatch = useContext(DispatchContext);
    const [currentSection, setCurrentSection] = useState('sec-1');
    const [ref, dimensions] = useElemDimensions();
    const onClickHandler = useCallback(
        (section) => setCurrentSection(section), []
    );

    useEffect(() => {
        dispatch(setMenuSectionHeight(dimensions.height));
    }, [dimensions]);

    const renderSections = () => (
        sections.map(section => {
            return (
                <SectionTab key={section.id}
                            section={section}
                            currentSection={currentSection}
                            onClick={onClickHandler} />
            );
        })
    );

    return (
        <StyledSectionMenu ref={ref}
                           dimensions={dimensions}
                           hideSectionMenu={hideSectionMenu}>
            {renderSections()}
        </StyledSectionMenu>
    );
};

SectionMenu.propTypes = {
    sections: PropTypes.array.isRequired,
    hideSectionMenu: PropTypes.bool
};
