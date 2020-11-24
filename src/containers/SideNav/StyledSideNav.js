import styled from 'styled-components';
import { device } from '../../styles/device';


export const StyledSideNav = styled.nav`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: ${({ theme }) => theme.sideNav.background || 'white'};
    box-shadow: 1px 0px 3px 0px black;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-102%)'};

    @media ${device.tablet} {
        width: 250px;
    }
`;

StyledSideNav.displayName = 'StyledSideNav';
