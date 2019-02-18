import { db } from './Firebase';

// const expensesRef = (uid) => ;

export const addNewExpenses = (uid, newExp) => {
  const addExp = db.ref('expenses/' + uid).push();
  return addExp.set(newExp);
};
