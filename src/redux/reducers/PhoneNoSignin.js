const INITIAL_STATE = {
  start: false,
  success: false,
  error: false
};

import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../actionTypes/Auth';

function PhoneNoSigninReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNUP_START: {
      return { ...state, start: true, error: '' };
    }
    case SIGNUP_SUCCESS: {
      return { ...state, success: true };
    }
    case SIGNUP_ERROR: {
      return { ...state, start: false, error: true };
    }
    default: {
      return state;
    }
  }
}
export default PhoneNoSigninReducer;
