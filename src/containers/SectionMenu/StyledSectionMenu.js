import styled from 'styled-components';

export const StyledSectionMenu = styled.ul`
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    display: flex;
    margin-bottom: 0;
    padding: 0 ${({ theme }) => theme.header.padding}px;
    overflow-x: scroll;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.sectionMenu && theme.sectionMenu.textSize || 1}em;
    transition: margin-top 0.4s;
    margin-top: ${({ hideSectionMenu, dimensions }) => hideSectionMenu ? -dimensions.height : 0}px;
    scrollbar-width: none;  /* Firefox */

    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari and Opera */
    }
`;

StyledSectionMenu.displayName = 'StyledSectionMenu';
