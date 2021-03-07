import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import combineReducers from './reducers/rootReducer'

const initialSate= {
    activePage: 'HOME',
    selectedProductID: {}
};

const store = createStore(
    combineReducers,
    initialSate,
    composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(()=>{
    console.log(store.getState())
})

export default store;