import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SignupReducer from './Signup';
import SigninReducer from './Signin';

const allReducers = combineReducers({
  form: formReducer,
  Signup: SignupReducer,
  Signin: SigninReducer
});
export default allReducers;
