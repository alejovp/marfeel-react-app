import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { appReducer } from './reducer';
import { SECTION_MENU_HEIGHT } from '../internals/constants';
import { sectionsMock } from '../../__mocks__/sections';


const initialState = {
    sectionMenuHeight: SECTION_MENU_HEIGHT,
    openSideNav: false,
    currentSection: sectionsMock[0].id // this should be controlled by router location path
};

const StateContext = createContext();
const DispatchContext = createContext();

const AppStore = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};

AppStore.propTypes = {
    children: PropTypes.node
};

export {
    AppStore,
    StateContext,
    DispatchContext
};
