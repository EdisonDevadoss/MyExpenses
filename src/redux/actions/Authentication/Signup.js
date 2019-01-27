import { auth } from '../../../firebase';

import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../../actionTypes/Auth';

const start = () => ({ type: SIGNUP_START });
const success = () => ({ type: SIGNUP_SUCCESS });
const error = () => ({ type: SIGNUP_ERROR });

const signup = (email, password) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(start());
      auth
        .doCreateUserWithEmailAndPassword(email, password)
        .then(() => {
          dispatch(success());
          resolve();
        })
        .catch((errors) => {
          console.log('errors is', errors);
          dispatch(error());
          reject();
        });
    });
};
export default signup;
