import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    status: "idle",

}
const sliceName = "LogInSlice";

const logInSlice = createSlice({
    name: sliceName,
    initialState: initialState.status,
    reducers: {
        submitLogIn(state, action) {

            return  { status: "LOGIN_SUBMIT" }
           
        },

        logInSuccess(state, action) {

            return  { status: "LOGIN_SUCCES" }
        },
        submitLogOut(state, action) {

            return  { status: "LOGOUT_SUBMIT" }
           
        },

    },
})

export const { submitLogIn, logInSuccess, submitLogOut } = logInSlice.actions

export const logInReducer = logInSlice.reducer