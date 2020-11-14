import { SET_SECTION_MENU_HEIGHT } from './constants';

export const setMenuSectionHeight = (value) => {
    return {
        type: SET_SECTION_MENU_HEIGHT,
        payload: value
    };
};
