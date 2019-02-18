const INITIAL_STATE = {
  start: false,
  success: false,
  error: false
};

import {
  ADD_NEW_EXPENSES_START,
  ADD_NEW_EXPENSES_SUCCESS,
  ADD_NEW_EXPENSES_ERROR
} from '../actionTypes/ExpensesOperation';

function AddNewExpensesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_NEW_EXPENSES_START: {
      return { ...state, start: true, error: '' };
    }
    case ADD_NEW_EXPENSES_SUCCESS: {
      return { ...state, success: true };
    }
    case ADD_NEW_EXPENSES_ERROR: {
      return { ...state, start: false, error: true };
    }
    default: {
      return state;
    }
  }
}
export default AddNewExpensesReducer;
