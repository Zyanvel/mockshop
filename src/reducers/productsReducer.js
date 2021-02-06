import { POPULATE_PRODUCTS } from '../actions/productsActions';

export default function productsReducer(state = {}, action) {
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
        return { ...state, products: action.payload, productsByCategory };
        default:
            return state;
    }
}