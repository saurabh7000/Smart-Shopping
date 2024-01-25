import { CLEAR_ERRORS } from "../Constants/productContant";
import {
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_PASSWORD_REQUEST,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
} from "../Constants/userContant";

export const registerReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        loading: true,
        isRegistered: false,
        user: {},
      };
    }
    case REGISTER_SUCCESS: {
      return {
        loading: false,
        isRegistered: true,
        user: action.payload.user,
      };
    }
    case REGISTER_FAILURE: {
      return {
        loading: true,
        isRegistered: false,
        error: action.payload,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

export const loginReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST: {
      return {
        loading: true,
        isAuthenticated: false,
      };
    }
    case LOGIN_SUCCESS:
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        loading: true,
        user: null,
        isAuthenticated: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        error: action.payload,
      };
    }
    case LOAD_USER_FAILURE: {
      return {
        loading: true,
        isAuthenticated: false,
        error: action.payload,
      };
    }
    case LOGOUT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

export const updatePasswordReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD_REQUEST: {
      return {
        loading: true,
        user: {},
      };
    }
    case UPDATE_PASSWORD_SUCCESS: {
      return {
        loading: false,
        user: action.payload.user,
      };
    }
    case UPDATE_PASSWORD_FAILURE: {
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        loading: false,
        message: action.payload,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        loading: false,
        message: action.payload,
      };
    }
    case FORGOT_PASSWORD_FAILURE:
    case RESET_PASSWORD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }
    default:
      return state;
  }
};
