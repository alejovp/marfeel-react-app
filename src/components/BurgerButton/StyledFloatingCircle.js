import styled from 'styled-components';
import { FLOATING_CIRCLE_PADDING } from '../../internals/constants';


export const StyledFloatingCircle = styled.div`
    position: absolute;
    left: ${({ left }) => left || 0}px;
    top: ${({ top }) => top || 0}px;
    padding: ${FLOATING_CIRCLE_PADDING}px;
    background-color: ${({theme}) => theme.background && theme.background.color || 'white'};
    border-radius: 50%;
    z-index: 10;
`;

StyledFloatingCircle.displayName = 'StyledFloatingCircle';
