import {combineReducers, createStore} from "redux";
import modalReducer from './modalReducer';
import foodReducer from './foodReducer';

let reducers = combineReducers({
    windowModal : modalReducer,
    //windowFood: foodReducer
});

let store = createStore(reducers);

window.store = store;

export default store;