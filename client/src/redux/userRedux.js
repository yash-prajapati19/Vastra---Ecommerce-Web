import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: {
        currentUser : null,
        isFetching:false, 
        error:false
    },
    reducers: {
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state, action)=>{
            state.isFetching=false;
            state.currentUser= action.payload;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        logOut: (state) => {
            state.currentUser = null
        },

        registrationStart:(state)=>{
            state.isFetching=true
        },
        registrationSuccess:(state, action)=>{
            state.isFetching=false;
            state.currentUser= action.payload;
        },
        registrationFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure,logOut, registrationStart,registrationSuccess,registrationFailure} = userSlice.actions;
export default userSlice.reducer;