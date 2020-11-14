import { SET_SECTION_MENU_HEIGHT } from './constants';

export const appReducer = (state, action) => {
    switch (action.type) {
        case SET_SECTION_MENU_HEIGHT:
            return {
                ...state,
                sectionMenuHeight: action.payload
            };
        default:
            return {
                ...state
            };
    }
};
