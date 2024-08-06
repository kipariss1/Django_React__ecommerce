import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import { productListReducers } from './reducers/productReducers'

const store = configureStore({
    reducer: {
        productList: productListReducers,
    },
    initialState: {},
})

export default store

