import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './Slices/ProductSlice'
import { cartReducer } from './Slices/CartSlice'
import {logInReducer} from './Slices/LogInSlice'


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    LogIn: logInReducer,
  },
})