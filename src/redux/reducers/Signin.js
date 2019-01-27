const INITIAL_STATE = {
  start: false,
  success: false,
  error: false
};

import {
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR
} from '../actionTypes/Auth';

function SigninReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGNIN_START: {
      return { ...state, start: true, error: '' };
    }
    case SIGNIN_SUCCESS: {
      return { ...state, success: true };
    }
    case SIGNIN_ERROR: {
      return { ...state, start: false, error: true };
    }
    default: {
      return state;
    }
  }
}
export default SigninReducer;
