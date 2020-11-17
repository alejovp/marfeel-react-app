import styled from 'styled-components';

export const StyledLogo = styled.a`
    text-decoration: none;
    cursor: pointer;
    position: relative;
    img {
        height: ${({ theme }) => theme.logo.size}px;
    }
`;
