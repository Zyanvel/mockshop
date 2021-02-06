import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import combineReducers from './reducers/rootReducer'

const initialSate= {};

const store = createStore(
    combineReducers,
    initialSate,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;