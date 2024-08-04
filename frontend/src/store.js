import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'


const store = configureStore({
    reducer: {},
    initialState: {},
})

export default store
