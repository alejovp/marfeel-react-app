import styled from 'styled-components';


export const StyledAppNav = styled.nav`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: margin-top 0.4s;
    margin-top: ${({ hide, dimensions }) => hide ? -dimensions.height : 0}px;
`;

StyledAppNav.displayName = 'StyledAppNav';
