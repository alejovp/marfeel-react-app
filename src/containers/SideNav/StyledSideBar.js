import styled from 'styled-components';
import { APP_BAR_HEIGHT } from '../../internals/constants';


export const StyledSideBar = styled.div`
    width: 100%;
    min-height: ${APP_BAR_HEIGHT}px;
    display: flex;
    align-items: center;
`;

StyledSideBar.displayName = 'StyledSideBar';
