import axios from 'axios'
import {
    FETCH_POPULATE_PRODUCTS_REQUEST,
    FETCH_POPULATE_PRODUCTS_SUCCESS,
    FETCH_POPULATE_PRODUCTS_FAILURE
} from '../components/productTypes'

export const fetchPopulateProductsRequest = () => {
    return {
        type: FETCH_POPULATE_PRODUCTS_REQUEST
    }
}

export const fetchPopulateProductsSuccess = products => {
    return {
        type: FETCH_POPULATE_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchPopulateProductsFailure = error => {
    return {
        type: FETCH_POPULATE_PRODUCTS_FAILURE,
        payload: error
    }
}


export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchPopulateProductsRequest)
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
            dispatch(fetchPopulateProductsSuccess(response.data))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchPopulateProductsFailure(errorMsg))
        })
    }
}