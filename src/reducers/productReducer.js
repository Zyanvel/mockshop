import { FETCH_POPULATE_PRODUCTS_FAILURE, 
    FETCH_POPULATE_PRODUCTS_REQUEST, 
    FETCH_POPULATE_PRODUCTS_SUCCESS } from "../components/productTypes"

const initialState = {
    // loading: false,
    // products: [],
    // error: 'Loading...'
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POPULATE_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POPULATE_PRODUCTS_SUCCESS:
            const products = action.payload.reduce((result, product) => {
                result[product.category] ? result[product.category].push(product) : result[product.category] = [product];
                return result;
            }, {})
            return {
                ...products
            }
        case FETCH_POPULATE_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer