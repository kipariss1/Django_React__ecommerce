import { createStore, configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { productListReducers } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducers
})

const initialState = {}

const middleware = [thunk]

// const store = createStore(reducer, initialState, 
//     composeWithDevTools(applyMiddleware(...middleware)))

const store = configureStore({
    reducer: {
        productList: productListReducers
    }, 
    initialState: initialState})
    
export default store

