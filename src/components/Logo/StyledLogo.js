import styled from 'styled-components';

export const StyledLogo = styled.a`
    text-decoration: none;
    cursor: pointer;
    position: relative;
    img {
        height: ${({ theme, size }) => size ? size : theme.logo.size}px;
        filter: ${({ grayScaled }) => grayScaled ? 'grayscale(1)' : null};
    }
`;

StyledLogo.displayName = 'StyledLogo';
