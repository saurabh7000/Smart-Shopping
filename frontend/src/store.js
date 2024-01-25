import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  productDetailReducer,
  productsReducer,
} from "./Redux/Reducers/productReducer";
import {
  forgotPasswordReducer,
  loginReducer,
  registerReducer,
  updatePasswordReducer,
} from "./Redux/Reducers/userReducer";
import { cartReducer } from "./Redux/Reducers/cartReducer";
const rootReducer = combineReducers({
  products: productsReducer,
  product: productDetailReducer,
  register: registerReducer,
  login: loginReducer,
  updatePassword: updatePasswordReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
});

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(/* additional middleware */),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
