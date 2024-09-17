import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/product/productApi";
import { userApi } from "../features/auth/userApi";
import { userSlice } from "../features/auth/userSlice";
import { cartSlice } from "../features/cart/cartSlice";


export const store = configureStore({
  reducer: {
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer ,
  [userSlice.name]: userSlice.reducer,
  [cartSlice.name]:  cartSlice.reducer,
},

middleware: getDefaultMiddleware => 
  getDefaultMiddleware().concat([ 
    productApi.middleware,
  userApi.middleware])
})

