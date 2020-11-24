import React, { useCallback, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledSectionMenu } from './StyledSectionMenu';
import { SectionTab } from '../../components/SectionTab';
import { useElemDimensions } from '../../hooks';
import { DispatchContext, StateContext } from '../../contexts/AppStore';
import { setCurrentSection, setMenuSectionHeight } from '../../contexts/actions';


export const SectionMenu = ({ sections = [], hideSectionMenu }) => {
    const dispatch = useContext(DispatchContext);
    const { currentSection } = useContext(StateContext);
    const [ref, dimensions] = useElemDimensions();
    const onClickHandler = useCallback(
        (section) => dispatch(setCurrentSection(section)), [dispatch]
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
