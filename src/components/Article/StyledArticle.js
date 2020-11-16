import styled from 'styled-components';
import { device } from '../../styles/device';


export const StyledArticle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    flex-wrap: wrap;

    @media ${device.tablet} {
        flex-wrap: nowrap;
        align-items: unset;
    }
`;

StyledArticle.displayName = 'StyledArticle';
