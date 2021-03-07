export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SELECTED_PRODUCT_ID = 'SET_SELECTED_PRODUCT_ID';
export const NAVIGATE_TO_HOME_PAGE = 'NAVIGATE_TO_HOME_PAGE';
export const SEARCH_INPUT = 'SEARCH_INPUT';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';
export const SET_SELECTED_PRODUCT_ID_ON_SEARCH_RESULTS = 'SET_SELECTED_PRODUCT_ID_ON_SEARCH_RESULTS';

export const setCategory  = category => ({
    type: SET_CATEGORY,
    payload: category,
});

export const setSelectedProductId = productId => ({
    type: SET_SELECTED_PRODUCT_ID,
    payload: productId,
});

export const setHomePage = homePage => ({
    type: NAVIGATE_TO_HOME_PAGE,
    payload: homePage,
});

export const searchInput = searchInput => ({
    type: SEARCH_INPUT,
    payload: searchInput,
})

export const clearSearchResults = clearSearchResults => ({
    type: CLEAR_SEARCH_RESULTS,
    payload: clearSearchResults,
})

export const setSelectedProductIdOnSearchResults = ProductIdOnSearchResults => ({
    type: SET_SELECTED_PRODUCT_ID_ON_SEARCH_RESULTS,
    payload: ProductIdOnSearchResults,
})