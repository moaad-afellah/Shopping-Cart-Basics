import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { 
    state: [], 
}
const sliceName = "productsSlice";

export const fetchProducts = createAsyncThunk(
    `${sliceName}/fetchProducts`,
    async () =>{
       const res = await fetch ("http://localhost:3000/products")
       const data = await res.json()
       return data
})


const productsSlice = createSlice({
    name: sliceName,
    initialState : initialState.state,
    reducers : {

    },
    extraReducers :  (builder) =>{ 
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state = action.payload
            return state
        })
    }
})

export const productsReducer = productsSlice.reducer