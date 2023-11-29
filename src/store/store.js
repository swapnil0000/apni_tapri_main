import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import orderReducer from "./orderSlice";
import productReducer from "./productSlice";
import uiReducer from "./uiSlice"
const store =configureStore({
    reducer:{
        cart:cartReducer,
        auth:authReducer,
        order:orderReducer,
        product:productReducer,
        ui:uiReducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    }),
    devTools:true
})



export default store;