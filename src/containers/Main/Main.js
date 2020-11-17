import React, { useContext } from 'react';
import { StateContext } from '../../contexts/AppStore';
import { HomePage } from '../HomePage';
import { StyledMain } from './StyledMain';


export const Main = () => {
    const state = useContext(StateContext);

    return (
        <StyledMain state={state}>
            <HomePage />
        </StyledMain>
    );
};
