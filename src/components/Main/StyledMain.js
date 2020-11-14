import styled from 'styled-components';
import { APP_BAR_HEIGHT } from '../../internals/constants';

export const StyledMain = styled.main`
    margin-top: ${({state}) => state.sectionMenuHeight + APP_BAR_HEIGHT}px;
    width: 100%;
`;
