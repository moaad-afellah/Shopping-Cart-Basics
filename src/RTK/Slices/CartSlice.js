import { createSlice } from "@reduxjs/toolkit";


const sliceName = "cartSlice";


const cartSlice = createSlice({
    name: sliceName,
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const product = state.find((item) => item.id == action.payload.id);
            const newProduct = { ...action.payload, qyt: 1 }
            state.push(newProduct)

        },
        modifyQuantityByAmount(state, action) {
            const product = state.find((item) => item.id == action.payload.item.id);
            product.qyt += action.payload.quantity
        },
        removeFromCart(state, action) {
            return state.filter(item => item.id != action.payload)
        },
        clearCart() {
            return [];
        }
    },
})

export const { addToCart, removeFromCart, clearCart, modifyQuantityByAmount } = cartSlice.actions
export const cartReducer = cartSlice.reducer