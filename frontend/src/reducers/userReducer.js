import { createReducer } from "@reduxjs/toolkit";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_RESET,
  UPDATE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_RESET,
  DELETE_USER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

const initialState = {
  user: {},
};

export const userReducer = createReducer(initialState, {
  [LOGIN_REQUEST]: (state, action) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  [LOGIN_SUCCESS]: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  [LOGIN_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
    state.user = null;
  },
  [REGISTER_USER_REQUEST]: (state, action) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  [REGISTER_USER_SUCCESS]: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated = true;
  },
  [REGISTER_USER_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
    state.user = null;
  },
  [LOAD_USER_REQUEST]: (state, action) => {
    state.loading = true;
    state.isAuthenticated = false;
  },
  [LOAD_USER_SUCCESS]: (state, action) => {
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  [LOAD_USER_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated = false;
    state.user = null;
  },
  [LOGOUT_SUCCESS]: (state, action) => {
    state.loading = false;
    state.isAuthenticated = false;
    state.user = null;
  },
  [LOGOUT_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [CLEAR_ERRORS]: (state, action) => {
    state.error = null;
  },
});

export const profileReducer = createReducer(initialState, {
  [UPDATE_PROFILE_REQUEST]: (state, action) => {
    state.loading = true;
  },
  [UPDATE_PROFILE_SUCCESS]: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload;
  },
  [UPDATE_PROFILE_RESET]: (state, action) => {
    state.isUpdated = false;
  },
  [UPDATE_PROFILE_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [UPDATE_PASSWORD_REQUEST]: (state, action) => {
    state.loading = true;
  },
  [UPDATE_PASSWORD_SUCCESS]: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload;
  },
  [UPDATE_PASSWORD_RESET]: (state, action) => {
    state.isUpdated = false;
  },
  [UPDATE_PASSWORD_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [UPDATE_USER_REQUEST]: (state, action) => {
    state.loading = true;
  },
  [UPDATE_USER_SUCCESS]: (state, action) => {
    state.loading = false;
    state.isUpdated = action.payload;
  },
  [UPDATE_USER_RESET]: (state, action) => {
    state.isUpdated = false;
  },
  [UPDATE_USER_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [DELETE_USER_REQUEST]: (state, action) => {
    state.loading = true;
  },
  [DELETE_USER_SUCCESS]: (state, action) => {
    state.loading = false;
    state.isDeleted = action.payload.success;
    state.message = action.payload.message;
  },
  [DELETE_USER_RESET]: (state, action) => {
    state.isDeleted = false;
  },
  [DELETE_USER_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  [CLEAR_ERRORS]: (state, action) => {
    state.error = null;
  },
});

export const forgotPasswordReducer = createReducer(initialState, {
  [FORGOT_PASSWORD_REQUEST]: (state, action) => {
    state.loading = true;
    state.error = null;
  },
  [FORGOT_PASSWORD_SUCCESS]: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  [FORGOT_PASSWORD_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [RESET_PASSWORD_REQUEST]: (state, action) => {
    state.loading = true;
    state.error = null;
  },
  [RESET_PASSWORD_SUCCESS]: (state, action) => {
    state.loading = false;
    state.success = action.payload;
  },
  [RESET_PASSWORD_FAIL]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  [CLEAR_ERRORS]: (state, action) => {
    state.error = null;
  },
});

export const allUsersReducer = createReducer(
  { users: [] },
  {
    [ALL_USERS_REQUEST]: (state, action) => {
      state.loading = true;
    },
    [ALL_USERS_SUCCESS]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [ALL_USERS_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CLEAR_ERRORS]: (state, action) => {
      state.error = null;
    },
  }
);

export const userDetailsReducer = createReducer(
  { user: {} },
  {
    [USER_DETAILS_REQUEST]: (state, action) => {
      state.loading = true;
    },
    [USER_DETAILS_SUCCESS]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [USER_DETAILS_FAIL]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [CLEAR_ERRORS]: (state, action) => {
      state.error = null;
    },
  }
);
