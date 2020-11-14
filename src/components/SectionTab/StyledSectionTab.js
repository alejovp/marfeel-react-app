import styled from 'styled-components';

const getBorderBottom = ({ theme, isActive }) => {
    const { tipography, sectionMenu } = theme;
    const defaultColor = tipography && tipography.primaryFontColor;
    let borderColor;
    if (isActive && sectionMenu && sectionMenu.color) {
        borderColor = sectionMenu.color;
    } else if (isActive) {
        borderColor = defaultColor;
    } else {
        borderColor = 'transparent';
    }
    return `4px solid ${borderColor}`;
};

export const StyledSectionTab = styled.li`
    list-style: none;
    padding: 8px 10px;
    text-align: center;
    cursor: pointer;
    color: ${({ theme }) => theme.sectionMenu && theme.sectionMenu.color};
    border-bottom: ${getBorderBottom};

    &:hover {
        opacity: 0.8
    }
`;

StyledSectionTab.displayName = 'StyledSectionTab';
