import styled from 'styled-components';

export const StyledBackground = styled.div`
    height: inherit;
    width: 100%;
    background-color: ${({theme}) => theme.background.color};
`;

StyledBackground.displayName = 'StyledBackground';
