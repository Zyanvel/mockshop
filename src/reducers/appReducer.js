import { SET_CATEGORY } from '../actions/appActions';
import { SET_SELECTED_PRODUCT_ID } from '../actions/appActions';
import {NAVIGATE_TO_HOME_PAGE} from '../actions/appActions';
import {SEARCH_INPUT} from '../actions/appActions';
import {CLEAR_SEARCH_RESULTS} from '../actions/appActions';
import {SET_SELECTED_PRODUCT_ID_ON_SEARCH_RESULTS} from  '../actions/appActions';

export const PAGES = {
    HOME: 'HOME',
    CATEGORY: 'CATEGORY',
    PRODUCT: 'PRODUCT',
}

const initialState = {
    activePage: PAGES.HOME,
    selectedCategory: null,
    selectedProductId: null,
    navigateToHomePage: [],
    search: '',
    clearSearch: '',
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                 ...state, 
                selectedCategory: action.payload,
                activePage: PAGES.CATEGORY
             };

        case SET_SELECTED_PRODUCT_ID:
             return {
                 ...state,
                 selectedProductId: action.payload,
                 activePage: PAGES.PRODUCT
             };

        case NAVIGATE_TO_HOME_PAGE:
            return initialState;

        case SEARCH_INPUT:
            return {
                ...state,
                search: action.payload,
            }

        case CLEAR_SEARCH_RESULTS:
                return initialState;

        case SET_SELECTED_PRODUCT_ID_ON_SEARCH_RESULTS:
            return {
                ...state,
                 selectedProductId: action.payload,
                 activePage: PAGES.PRODUCT,
                 search: '',
            }

            default:
                return state;
}

}
