import styled from 'styled-components';
import { device } from '../../styles/device';


const getLinkColor = ({ theme, isActive }) => {
    let color = theme.tipography && theme.tipography.primaryFontColor || 'black';
    if (isActive) {
        color = 'red';
    }
    return color;
};

export const StyledLink = styled.a`
    font-size: 1.5em;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    color: ${getLinkColor};
    
    @media ${device.tablet} {
        text-align: left;
    }

    &:hover {
        opacity: 0.8
    }
`;

StyledLink.displayName = 'StyledLink';
