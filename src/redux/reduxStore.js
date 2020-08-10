import {combineReducers, createStore} from "redux";
import customersReducer from './customersReducer';
import modalReducerTest from './modalReducerTest';
import foodReducer from './foodReducer';

let reducers = combineReducers({
    windowModal : customersReducer,
    windowModalTest : modalReducerTest,
    windowFood: foodReducer
});

let store = createStore(reducers);

window.store = store;

export default store;