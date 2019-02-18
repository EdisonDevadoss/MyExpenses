import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SignupReducer from './Signup';
import SigninReducer from './Signin';
import AddNewExpensesReducer from './AddNewExpenses';
import sessionReducer from './session';

const allReducers = combineReducers({
  form: formReducer,
  Signup: SignupReducer,
  Signin: SigninReducer,
  AddNewExpenses: AddNewExpensesReducer,
  session: sessionReducer
});
export default allReducers;
