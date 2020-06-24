import {combineReducers, createStore} from "redux";
import modalReducer from './modalReducer';

let reducers = combineReducers({
    windowModal : modalReducer
});

let store = createStore(reducers);

window.store = store;

export default store;