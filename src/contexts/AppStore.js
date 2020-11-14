import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { appReducer } from './reducer';
import { SECTION_MENU_HEIGHT } from '../internals/constants';


const initialState = {
    sectionMenuHeight: SECTION_MENU_HEIGHT
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
