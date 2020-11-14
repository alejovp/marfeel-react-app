import React, { useContext } from 'react';
import { StateContext } from '../../contexts/AppStore';
import { StyledMain } from './StyledMain';


export const Main = () => {
    const state = useContext(StateContext);

    return (
        <StyledMain state={state}>
            <h1 style={{ height: '1500px' }}>Hello there!!</h1>
        </StyledMain>
    );
};
