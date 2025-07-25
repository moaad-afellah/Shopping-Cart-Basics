import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    status: "idle",
    infoUser: localStorage.getItem('login-info')

}
const sliceName = "LogInSlice";

const logInSlice = createSlice({
    name: sliceName,
    initialState: initialState,
    reducers: {
        submitLogIn(state, action) {

            return { status: "LOGIN_SUBMIT" }

        },

        logInSuccess(state, action) {

            //TODO: set thereal payload from action : email+password
            return { status: "LOGIN_SUCCES", infoUser: { "email": "fzefze", "password": "fzemflk" } }
        },
        submitLogOut(state, action) {

            return { status: "LOGOUT_SUBMIT" }

        },
        logOutSuccess(state, action) {

            return { status: "LOGOUT_SUCCES" }

        },

    },
})

export const { submitLogIn, logInSuccess, submitLogOut, logOutSuccess } = logInSlice.actions

export const logInReducer = logInSlice.reducer