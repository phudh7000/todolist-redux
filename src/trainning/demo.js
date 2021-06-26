// const {createStore} = require('redux');
import {createStore} from 'redux';
import { sort, status } from '../actions';
import myReducers from '../reducers/index';



let store = createStore(myReducers);

// console.log(store.getState())
store.dispatch(status());
// console.log(store.getState())

store.dispatch(sort({ value: 5, name: 'hung' }));

// console.log(store.getState())


export default store;