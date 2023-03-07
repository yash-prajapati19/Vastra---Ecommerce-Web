import {createSlice} from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name:"client",
    initialState: {
        clients:[],
        isFetching: false,
        error: false,
    },
    reducers: {

        //GET 
        getClientStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        getClientSuccess: (state,action)=>{
            state.isFetching = false;
            state.clients = action.payload;
        },
        getClientFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },

        deleteClientStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        deleteClientSuccess: (state,action)=>{
            state.isFetching = false;
            state.clients.splice(
                state.clients.findIndex((item)=> item._id === action.payload),1
            );
        },
        deleteClientFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {getClientStart,getClientSuccess,getClientFailure,deleteClientStart,deleteClientSuccess,deleteClientFailure} = clientSlice.actions;
export default clientSlice.reducer;