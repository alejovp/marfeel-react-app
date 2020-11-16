import styled from 'styled-components';
import { device } from '../../styles/device';

export const StyledArticleImg = styled.img`
    width: 200px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 20px;

    @media ${device.mobileL} { 
        width: 350px;
        height: 250px;
    }

    @media ${device.tablet} {
        margin-bottom: 0;
        margin-right: 20px;
    }
`;

StyledArticleImg.displayName = 'StyledArticleImg';
