import React, { useCallback, useContext, useRef } from 'react';
import { sectionsMock } from '../../../__mocks__/sections';
import { setCurrentSection, setOpenSideNav } from '../../contexts/actions';
import { DispatchContext, StateContext } from '../../contexts/AppStore';
import { useClickAway } from '../../hooks';
import { Background } from '../../components/Background';
import { Logo } from '../../components/Logo/Logo';
import { SideNavLink } from '../../components/SideNavLink';
import { StyledSideBar } from './StyledSideBar';
import { StyledSideLinks } from './StyledSideLinks';
import { StyledSideNav } from './StyledSideNav';


export const SideNav = () => {
    const { openSideNav, currentSection } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const sideNavRef = useRef();

    const closeSideNav = () => dispatch(setOpenSideNav(false));
    const onClickHandler = useCallback((sectionId) => {
        dispatch(setCurrentSection(sectionId));
        closeSideNav();
    }, [dispatch]);

    useClickAway(openSideNav && sideNavRef, closeSideNav);

    const renderSections = () => sectionsMock.map(section => (
        <SideNavLink key={section.id}
                     section={section}
                     isActive={currentSection === section.id}
                     onClick={onClickHandler} />
    ));

    return (
        <StyledSideNav ref={sideNavRef}
                       open={openSideNav}>
            <div>
                <Background>
                    <StyledSideBar>
                        <Logo size={28}
                              grayScaled />
                    </StyledSideBar>
                </Background>
            </div>
            <StyledSideLinks>
                {renderSections()}
            </StyledSideLinks>
        </StyledSideNav>
    );
};
