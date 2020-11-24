import styled from 'styled-components';
import { APP_BAR_HEIGHT } from '../../internals/constants';


export const StyledAppNav = styled.nav`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: margin-top 0.4s;
    margin-top: ${({ hide }) => hide ? -APP_BAR_HEIGHT : 0}px;
`;

StyledAppNav.displayName = 'StyledAppNav';
