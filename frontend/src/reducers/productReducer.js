import { createReducer } from "@reduxjs/toolkit";
import {
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_RESET,
  NEW_REVIEW_FAIL,
  ADMIN_PRODUCTS_REQUEST,
  ADMIN_PRODUCTS_SUCCESS,
  ADMIN_PRODUCTS_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_RESET,
  NEW_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_RESET,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_RESET,
  UPDATE_PRODUCT_FAIL,
  ALL_REVIEWS_REQUEST,
  ALL_REVIEWS_SUCCESS,
  ALL_REVIEWS_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_RESET,
  DELETE_REVIEW_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

const initialState = {
  products: [],
};

export const productReducer = createReducer(initialState, {
  [ALL_PRODUCTS_REQUEST]: (state) => {
    state.loading = true;
    state.products = [];
  },
  [ALL_PRODUCTS_SUCCESS]: (state, action) => {
    state.loading = false;
    state.products = action.payload.products;
    state.productCount = action.payload.productCount;
    state.resultPerPage = action.payload.resultPerPage;
  },
  [ALL_PRODUCTS_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [ADMIN_PRODUCTS_REQUEST]: (state) => {
    state.loading = true;
    state.products = [];
  },
  [ADMIN_PRODUCTS_SUCCESS]: (state, action) => {
    state.loading = false;
    state.products = action.payload;
  },
  [ADMIN_PRODUCTS_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [CLEAR_ERRORS]: (state) => {
    state.error = null;
  },
});

const initialProductDetailsState = {
  product: {},
};

export const productDetailsReducer = createReducer(initialProductDetailsState, {
  [PRODUCT_DETAILS_REQUEST]: (state) => {
    state.loading = true;
    state.product = {};
  },
  [PRODUCT_DETAILS_SUCCESS]: (state, action) => {
    state.loading = false;
    state.product = action.payload;
  },
  [PRODUCT_DETAILS_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [CLEAR_ERRORS]: (state) => {
    state.error = null;
  },
});

export const newReviewReducer = createReducer(
  { review: {} },
  {
    [NEW_REVIEW_REQUEST]: (state) => {
      state.loading = true;
    },
    [NEW_REVIEW_SUCCESS]: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    [NEW_REVIEW_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [NEW_REVIEW_RESET]: (state) => {
      state.success = false;
    },
    [CLEAR_ERRORS]: (state) => {
      state.error = null;
    },
  }
);

export const newProductReducer = createReducer(
  { product: {} },
  {
    [NEW_PRODUCT_REQUEST]: (state) => {
      state.loading = true;
    },
    [NEW_PRODUCT_SUCCESS]: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.product = action.payload.product;
    },
    [NEW_PRODUCT_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [NEW_PRODUCT_RESET]: (state) => {
      state.success = false;
    },
    [CLEAR_ERRORS]: (state) => {
      state.error = null;
    },
  }
);

export const deleteProductReducer = createReducer(
  { product: {} },
  {
    [DELETE_PRODUCT_REQUEST]: (state) => {
      state.loading = true;
    },
    [DELETE_PRODUCT_SUCCESS]: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    [DELETE_PRODUCT_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DELETE_PRODUCT_RESET]: (state) => {
      state.isDeleted = false;
    },
    [UPDATE_PRODUCT_REQUEST]: (state) => {
      state.loading = true;
    },
    [UPDATE_PRODUCT_SUCCESS]: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    [UPDATE_PRODUCT_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [UPDATE_PRODUCT_RESET]: (state) => {
      state.isUpdated = false;
    },
    [CLEAR_ERRORS]: (state) => {
      state.error = null;
    },
  }
);

export const productReviewsReducer = createReducer(
  { reviews: [] },
  {
    [ALL_REVIEWS_REQUEST]: (state) => {
      state.loading = true;
    },
    [ALL_REVIEWS_SUCCESS]: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    [ALL_REVIEWS_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CLEAR_ERRORS]: (state) => {
      state.error = null;
    },
  }
);

export const reviewReducer = createReducer(
  { review: {} },
  {
    [DELETE_REVIEW_REQUEST]: (state) => {
      state.loading = true;
    },
    [DELETE_REVIEW_SUCCESS]: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    [DELETE_REVIEW_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [DELETE_REVIEW_RESET]: (state) => {
      state.isDeleted = false;
    },
    [CLEAR_ERRORS]: (state) => {
      state.error = null;
    },
  }
);
