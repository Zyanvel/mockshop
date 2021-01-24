import { FETCH_POPULATE_PRODUCTS_FAILURE, 
    FETCH_POPULATE_PRODUCTS_REQUEST, 
    FETCH_POPULATE_PRODUCTS_SUCCESS } from "../components/productTypes"

const initialState = {
    loading: false,
    products: [],
    error: 'Could not find categories'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POPULATE_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POPULATE_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_POPULATE_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer