import { publicRequest, userRequest } from "../requestMethods";
import { deleteProductFailure, deleteProductStart, deleteProductSuccess } from "./cartRedux";
import { getOrderFailure, getOrderStart, getOrderSuccess, postOrderFailure, postOrderStart, postOrderSuccess } from "./orderRedux";
import { loginFailure, loginStart, loginSuccess, registrationFailure, registrationStart, registrationSuccess } from "./userRedux"
const cors = require("cors");

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data)); 
    }catch(err){
        dispatch(loginFailure())
    }
};

export const register = async (dispatch,user)=>{
    dispatch(registrationStart());
    try{
        const res = await publicRequest.post("/auth/register",user);
        dispatch(registrationSuccess(res.data)); 
    }catch(err){
        dispatch(registrationFailure())
    }
};

export const order = async (order,dispatch)=>{
    dispatch(postOrderStart());
    try{
        const res = await userRequest.post(`/orders`,order);
        dispatch(postOrderSuccess(res.data)); 
    }catch(err){
        dispatch(postOrderFailure())
        console.log(err);
    }
};

export const deleteProduct = async (id,dispatch)=>{
    dispatch(deleteProductStart());
    try{
       // const res = await userRequest.delete(`"/products"/${id}`);
        dispatch(deleteProductSuccess(id)); 
    }catch(err){
        dispatch(deleteProductFailure());
    }
};

export const getOrders = async (dispatch)=>{
    dispatch(getOrderStart());
    try{
        const res = await userRequest.get("/orders");
        dispatch(getOrderSuccess(res.data)); 
    }catch(err){
        dispatch(getOrderFailure());
    }
};