import { configureStore } from '@reduxjs/toolkit'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import { userLoginReducer } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems') ?  JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('cartItems')) : null

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage
    },
    userLogin: {
        userInfo: userInfoFromStorage
    } 
}

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetails: productDetailsReducer,
        userLogin: userLoginReducer,
        cart: cartReducer,
    }, 
    initialState: initialState})

export default store

