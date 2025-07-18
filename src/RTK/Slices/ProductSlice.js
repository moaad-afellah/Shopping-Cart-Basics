import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import productsData from "../../server/db.json"

const initialState = {
    state: [],
}
const sliceName = "productsSlice";

export const fetchProducts = createAsyncThunk(
    `${sliceName}/fetchProducts`,
    async () => {
        //const res = await fetch ("http://localhost:3000/products")
        //const data = await res.json()

        return new Promise((resolve) => {

            setTimeout(() => { return resolve(productsData) }, 3000)
        })
    })


const productsSlice = createSlice({
    name: sliceName,
    initialState: initialState.state,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state = action.payload.products
            return state
        })
    }
})

export const productsReducer = productsSlice.reducer