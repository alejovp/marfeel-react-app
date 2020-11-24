import styled from 'styled-components';

export const StyledBackground = styled.div`
    height: inherit;
    width: 100%;
    background-color: ${({theme}) => theme.background && theme.background.color};
    background: ${({theme}) => theme.background && theme.background.gradient};
    z-index: 1;
`;

StyledBackground.displayName = 'StyledBackground';
