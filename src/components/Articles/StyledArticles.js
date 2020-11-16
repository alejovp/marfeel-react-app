import styled from 'styled-components';
import { device } from '../../styles/device';


export const StyledArticles = styled.section`
    padding: 10px;

    @media ${device.tablet} {
        padding: 50px;
    }
`;

StyledArticles.displayName = 'StyledArticles';
