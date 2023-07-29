import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  shippingInfo: localStorage.getItem("shippingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
};

export const cartReducer = createReducer(initialState, {
  [ADD_TO_CART]: (state, action) => {
    const item = action.payload;
    const isItemExist = state.cartItems.find((i) => i.product === item.product);
    if (isItemExist) {
      return {
        ...state,
        cartItems: state.cartItems.map((i) =>
          i.product === isItemExist.product ? item : i
        ),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };
    }
  },
  [REMOVE_CART_ITEM]: (state, action) => {
    return {
      ...state,
      cartItems: state.cartItems.filter((i) => i.product !== action.payload),
    };
  },
  [SAVE_SHIPPING_INFO]: (state, action) => {
    return {
      ...state,
      shippingInfo: action.payload,
    };
  },
});
