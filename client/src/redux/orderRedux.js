import {createSlice} from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name:"order",
    initialState: {
        orders:[],
        isFetching: false,
        error: false,
    },
    reducers: {

        postOrderStart:(state)=>{
            state.isFetching=true;
        },
        postOrderSuccess:(state, action)=>{
            state.isFetching=false;
            state.orders = action.payload;
        },
        postOrderFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },


        //GET 
        getOrderStart: (state)=>{
            state.isFetching = true;
            state.error = false;
        },
        getOrderSuccess: (state,action)=>{
            state.isFetching = false;
            state.orders = action.payload;
        },
        getOrderFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { postOrderStart,postOrderSuccess,postOrderFailure,getOrderStart,getOrderSuccess,getOrderFailure} = orderSlice.actions;
export default orderSlice.reducer;