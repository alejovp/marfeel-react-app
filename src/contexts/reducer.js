import {
    SET_CURRENT_SECTION,
    SET_OPEN_SIDE_NAV,
    SET_SECTION_MENU_HEIGHT
} from './constants';


export const appReducer = (state, action) => {
    switch (action.type) {
        case SET_SECTION_MENU_HEIGHT:
            return {
                ...state,
                sectionMenuHeight: action.payload
            };
        case SET_OPEN_SIDE_NAV:
            return {
                ...state,
                openSideNav: action.payload
            };
        case SET_CURRENT_SECTION:
            return {
                ...state,
                currentSection: action.payload
            };
        default:
            return {
                ...state
            };
    }
};
