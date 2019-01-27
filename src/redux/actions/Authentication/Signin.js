import { auth } from '../../../firebase';

import {
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR
} from '../../actionTypes/Auth';

const start = () => ({ type: SIGNIN_START });
const success = () => ({ type: SIGNIN_SUCCESS });
const error = () => ({ type: SIGNIN_ERROR });

const signin = (email, password) => {
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(start());
      auth
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          dispatch(success());
          resolve();
        })
        .catch(() => {
          dispatch(error());
          reject();
        });
    });
};
export default signin;
