import React, { useState } from 'react';
import { sectionsMock } from '../../../__mocks__/sections';
import { useScrollPosition } from '../../hooks';
import { Background } from '../Background';
import { BurgerButton } from '../BurgerButton/BurgerButton';
import { Logo } from '../Logo/Logo';
import { SectionMenu } from '../../containers/SectionMenu';
import { StyledAppBar } from './StyledAppBar';
import { StyledAppNav } from './StyledAppNav';
import { StyledHeader } from './StyledHeader';


export const Header = () => {
    const [hideSectionMenu, setHideSectionMenu] = useState(false);
    const positionHandler = (pos) => {
        if (pos > 400) {
            setHideSectionMenu(true);
        } else if (pos <= 400) {
            setHideSectionMenu(false);
        }
    };

    useScrollPosition(positionHandler);

    return (
        <StyledHeader>
            <Background>
                <StyledAppNav>
                    <Background>
                        <StyledAppBar>
                            <BurgerButton />
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
