import { combineReducers } from 'redux';
import productsReducer from '../reducers/productsReducer';
import appReducer from '../reducers/appReducer';

export default combineReducers({
    products: productsReducer,
    app: appReducer,
})

