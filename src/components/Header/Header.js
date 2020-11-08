import React from 'react';
import { Background } from '../Background';
import { Logo } from '../Logo/Logo';
import { StyledAppBar } from './StyledAppBar';
import { StyledAppNav } from './StyledAppNav';
import { StyledHeader } from './StyledHeader';


export const Header = () => (
    <StyledHeader>
        <Background>
            <StyledAppNav>
                <StyledAppBar>
                    <Logo />
                </StyledAppBar>
            </StyledAppNav>
        </Background>
    </StyledHeader>
);
