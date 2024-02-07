import { createSlice } from "@reduxjs/toolkit";


const sliceName = "cartSlice";


const cartSlice = createSlice({
    name: sliceName,
    initialState : [],
    reducers : {
        addToCart (state, action) {
            const product = state.find((item) => item.id == action.payload.id);
            if (product) {
                product.qyt+=1
            }else{
                const newProduct = {...action.payload, qyt: 1}
                state.push(newProduct)
            }
        },
        removeFromCart (state, action) {
           return state.filter(item => item.id != action.payload)
        },
        clearCart () {
            return [];
        }
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer