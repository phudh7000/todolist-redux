import {combineReducers, createStore} from 'redux';
import items from './item';
var myReducers = combineReducers({
    items,
})


let store = createStore(myReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;