import { POPULATE_PRODUCTS } from '../actions/productsActions';

const initialState = {
    productsById: {},
    productsByCategory: {},
}

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case POPULATE_PRODUCTS:
        //turn {products: [[product]]} into {[category]: [[product]]} 
       
        const productsByCategory = action.payload.reduce(
            (accumulator, product) => {
                const category = product.category;
                 
                return {
                    ...accumulator,
                    [category]: [...(accumulator[category] || []), product],
                };
            },
            {}
        );
        
        const productsById = action.payload.reduce(
            (object, product) => {
                object[product.id] = product
                return object;
            }, Object.create(null)
        );
        
        return { ...state, products: action.payload, productsByCategory, productsById };

        default:
            return state;
    }
}