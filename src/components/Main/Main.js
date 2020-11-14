import React, { useContext } from 'react';
import { AppContext } from '../../contexts/AppStore';
import { StyledMain } from './StyledMain';

export const Main = () => {
    const { state } = useContext(AppContext);

    return (
        <StyledMain state={state}>
            <h1 style={{ height: '1500px' }}>Hello there!!</h1>
        </StyledMain>
    );
};
