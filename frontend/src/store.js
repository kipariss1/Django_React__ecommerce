import { configureStore } from '@reduxjs/toolkit'
import { productListReducers, productDetailsReducers } from './reducers/productReducers'

const initialState = {}

const store = configureStore({
    reducer: {
        productList: productListReducers,
        productDetails: productDetailsReducers
    }, 
    initialState: initialState})

export default store

