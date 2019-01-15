import { combineReducers } from 'redux';
import PhoneNoSigninReducer from './PhoneNoSignin';

const allReducers = combineReducers({
  phoneNoSignin: PhoneNoSigninReducer
});
export default allReducers;
