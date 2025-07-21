import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import productsData from "../../server/db.json"

const initialState = {
    state: [],


}
const sliceName = "productsSlice";



export const fetchProducts = () => {

    console.log('Fetching Products from the server ...')
    return new Promise((resolve) => {

        setTimeout(() => { resolve(productsData) }, 100)
    })
}



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