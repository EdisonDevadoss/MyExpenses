import allReducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const store = createStore(allReducers, middleware);

export default store;
