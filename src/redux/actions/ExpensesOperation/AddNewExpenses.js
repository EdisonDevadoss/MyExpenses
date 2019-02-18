import { db } from '../../../firebase';

import {
  ADD_NEW_EXPENSES_START,
  ADD_NEW_EXPENSES_SUCCESS,
  ADD_NEW_EXPENSES_ERROR
} from '../../actionTypes/ExpensesOperation';

const start = () => ({ type: ADD_NEW_EXPENSES_START });
const success = () => ({ type: ADD_NEW_EXPENSES_SUCCESS });
const error = () => ({ type: ADD_NEW_EXPENSES_ERROR });

const addNewExpenses = (uid, data) => {
  console.log(uid, data);
  return (dispatch) =>
    new Promise((resolve, reject) => {
      dispatch(start());
      db.addNewExpenses(uid, data)
        .then((suc) => {
          console.log('suc is', suc);
          dispatch(success());
          resolve();
        })
        .catch((failed) => {
          console.log('failed is', failed);
          dispatch(error());
          reject();
        });
    });
};
export default addNewExpenses;
