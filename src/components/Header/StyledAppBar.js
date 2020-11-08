import styled from 'styled-components';

export const StyledAppBar = styled.div`
    position: relative;
    padding: 10px ${({ theme }) => theme.header.padding}px;
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

StyledAppBar.displayName = 'StyledAppBar';
