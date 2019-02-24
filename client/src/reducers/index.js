import {combineReducers} from 'redux';
import authReducer from './authReducer';
import customerReducer from './cutomerReducer';

export default combineReducers({
    auth:authReducer,
    customer:customerReducer
})