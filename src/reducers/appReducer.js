import { SET_CATEGORY } from '../actions/appActions';

// export default function appReducer(state = {}, action) {
//     switch (action.type) {
//         case SET_CATEGORY:

//             const filterProducts = action.payload.filter(
//                 (item) => {
//                     return item.category === setCategory || setCategory === null
//                 },
//             );
//             return { ...state, category: action.payload, filterProducts };
//             default:
//                 return state;
// }}

export default function appReducer(state = {}, action) {
    switch (action.type) {
        case SET_CATEGORY:
           
            return { ...state, selectedCategory: action.payload };
            default:
                return state;
}}
