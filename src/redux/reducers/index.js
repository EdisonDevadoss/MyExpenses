import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PhoneNoSigninReducer from './PhoneNoSignin';
import SignupReducer from './Signup';

const allReducers = combineReducers({
  form: formReducer,
  phoneNoSignin: PhoneNoSigninReducer,
  Signup: SignupReducer
});
export default allReducers;
