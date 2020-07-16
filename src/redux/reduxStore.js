import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import modalReducer from './modalReducer';
import modalReducerTest from './modalReducerTest';
import foodReducer from './foodReducer';

let reducers = combineReducers({
    windowModal : modalReducer,
    windowModalTest : modalReducerTest,
    //windowFood: foodReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;