import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        singOutUserStart: (state) => {
            state.loading = true;
        },
        singOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },
        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        deleteUserStart: (state)=>{
            state.loading=true;
        },
        deleteUserSuccess: (state)=>{
            state.loading=false;
            state.error=null;
            state.currentUser=null;
        },
        deleteUserFailed: (state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        updateUserDetailsSuccess: (state,action)=>{
            state.currentUser=action.payload;
            state.error=null;
            state.loading=false;
        },
        updateUserDetailsFailure: (state,action)=>{
            state.error=action.payload;
        }
    }
});
export const {
    signInFailure,
    signInStart,
    signInSuccess,
    singOutUserStart,
    singOutUserSuccess,
    signOutUserFailure,
    deleteUserFailed,
    deleteUserStart,
    deleteUserSuccess,
    updateUserDetailsSuccess,
    updateUserDetailsFailure
        } = userSlice.actions;
export default userSlice.reducer;