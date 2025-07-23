import { createSlice } from "@reduxjs/toolkit";



const sliceName = "cartSlice";



const cartSlice = createSlice({
    name: sliceName,
    initialState: { products: [], historyActions: [] },
    reducers: {
        addToCart(state, action) {

            const newProduct = { ...action.payload.product, qyt: 1 }
            state.products.push(newProduct)

            if (!action.payload.undoOperation) {

                state.historyActions.push({ action: action.payload.product, historyType: 'addToCart' })
            } else {

                state.historyActions.pop()
            }

            return state

        },
        modifyQuantityByAmount(state, action) {
            const product = state.products.find((item) => item.id == action.payload.item.id);
            product.qyt += action.payload.quantity

            if (!action.payload.undoOperation) {
                state.historyActions.push({ action, historyType: 'modifyQuantity' })
            } else {
                state.historyActions.pop()
            }


            return state;
        },
        removeFromCart(state, action) {
            state.products = state.products.filter((item) => item.id != action.payload.id)
            if (action.payload.undoOperation) {
                state.historyActions.pop()
            } else {
                state.historyActions.push({ id: action.payload.id, historyType: 'removeFromCart' })
            }
            return state;
        },
        clearCart() {
            state.products = []
            return state
        },

    },
})

export const { addToCart, removeFromCart, clearCart, modifyQuantityByAmount } = cartSlice.actions
export const cartReducer = cartSlice.reducer