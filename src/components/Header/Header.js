import React, { useCallback, useContext, useState } from 'react';
import { sectionsMock } from '../../../__mocks__/sections';
import { useElemDimensions, useScrollPosition } from '../../hooks';
import { Background } from '../Background';
import { BurgerButton } from '../BurgerButton/BurgerButton';
import { Logo } from '../Logo/Logo';
import { SectionMenu } from '../../containers/SectionMenu';
import { StyledAppBar } from './StyledAppBar';
import { StyledAppNav } from './StyledAppNav';
import { StyledHeader } from './StyledHeader';
import { DispatchContext } from '../../contexts/AppStore';
import { setOpenSideNav } from '../../contexts/actions';


export const Header = () => {
    const dispatch = useContext(DispatchContext);
    const [hideSectionMenu, setHideSectionMenu] = useState(false);
    const [hideAppNav, setHideAppNav] = useState(false);
    const [ref, dimensions] = useElemDimensions();

    const positionHandler = (pos) => {
        if (pos <= 400) {
            setHideAppNav(false);
            setHideSectionMenu(false);
        } else if (pos > 400 && pos <= 800) {
            setHideSectionMenu(true);
            setHideAppNav(false);
        } else if (pos > 800) {
            setHideAppNav(true);
        }
    };

    const onClickHandler = useCallback(() => {
        dispatch(setOpenSideNav(true));
    }, []);

    useScrollPosition(positionHandler);

    return (
        <StyledHeader>
            <BurgerButton onClick={onClickHandler} />
            <Background>
                <StyledAppNav ref={ref}
                              hide={hideAppNav}
                              dimensions={dimensions}>
                    <Background>
                        <StyledAppBar>
                            <Logo />
                        </StyledAppBar>
                    </Background>
                    <SectionMenu sections={sectionsMock}
                                 hideSectionMenu={hideSectionMenu} />
                </StyledAppNav>
            </Background>
        </StyledHeader>
    );
};
