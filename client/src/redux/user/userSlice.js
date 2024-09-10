import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   currentUser:null,
   error:null,
   loading:null,
};

const useSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
        },
        
    }
})