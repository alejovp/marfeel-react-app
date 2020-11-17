import styled from 'styled-components';
import { APP_BAR_HEIGHT } from '../../internals/constants';

export const StyledAppBar = styled.div`
    position: relative;
    padding: 10px ${({ theme }) => theme.header.padding}px;
    width: 100%;
    min-height: ${APP_BAR_HEIGHT}px;
    align-items: center;
    justify-content: center;
    display: flex;
`;

StyledAppBar.displayName = 'StyledAppBar';
