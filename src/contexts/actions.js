import {
    SET_CURRENT_SECTION,
    SET_OPEN_SIDE_NAV,
    SET_SECTION_MENU_HEIGHT
} from './constants';


export const setMenuSectionHeight = (value) => {
    return {
        type: SET_SECTION_MENU_HEIGHT,
        payload: value
    };
};

export const setOpenSideNav = (value) => {
    return {
        type: SET_OPEN_SIDE_NAV,
        payload: value
    };
};

export const setCurrentSection = (value) => {
    return {
        type: SET_CURRENT_SECTION,
        payload: value
    };
};
