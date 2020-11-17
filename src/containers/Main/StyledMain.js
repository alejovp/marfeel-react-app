import styled from 'styled-components';
import { APP_BAR_HEIGHT } from '../../internals/constants';
import { device } from '../../styles/device';


export const StyledMain = styled.main`
    margin-top: ${({state}) => state.sectionMenuHeight + APP_BAR_HEIGHT}px;
    width: 100%;

    @media ${device.laptop} { 
        max-width: 1200px;
    }

    @media ${device.desktop} {
        max-width: 1400px;
    }
`;
