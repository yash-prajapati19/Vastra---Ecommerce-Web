import { publicRequest, userRequest } from "../requestMethods";
import { deleteClientFailure, deleteClientStart, deleteClientSuccess, getClientFailure, getClientStart, getClientSuccess } from "./clientRedux";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data)); 
    }catch(err){
        dispatch(loginFailure())
    }
};

export const getProducts = async (dispatch)=>{
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data)); 
    }catch(err){
        dispatch(getProductFailure());
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

export const updateProduct = async (id,product,dispatch)=>{
    dispatch(updateProductStart());
    try{
        dispatch(updateProductSuccess({id, product })); 
    }catch(err){
        dispatch(updateProductFailure(err));
    }
};

export const addProduct = async (product,dispatch)=>{
    dispatch(addProductStart());
    try{
       const res = await userRequest.post(`/products`, product);
        dispatch(addProductSuccess(res.data)); 
    }catch(err){
        dispatch(addProductFailure());
    }
};

export const getClients = async (dispatch)=>{
    dispatch(getClientStart());
    try{
        const res = await userRequest.get("/users");
        dispatch(getClientSuccess(res.data)); 
    }catch(err){
        dispatch(getClientFailure());
    }
};

export const deleteClients = async (id,dispatch)=>{
    dispatch(deleteClientStart());
    try{
       // const res = await userRequest.delete(`"/products"/${id}`);
        dispatch(deleteClientSuccess(id)); 
    }catch(err){
        dispatch(deleteClientFailure());
    }
};