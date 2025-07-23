import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    state: [],


}
const sliceName = "productsSlice";

const productsSlice = createSlice({
    name: sliceName,
    initialState: initialState.state,
    reducers: {
        addAllFetchProducts(state, action) {
            return state = action.payload

        },

    },
})

export const { addAllFetchProducts } = productsSlice.actions

export const productsReducer = productsSlice.reducer