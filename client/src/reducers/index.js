import {combineReducers} from 'redux';
import authReducer from './authReducer';
import listCustomerReducer from './listCustomerReducer';
import addCustomerReducer from './addCustomerReducer';

export default combineReducers({
    auth:authReducer,
    listcustomer:listCustomerReducer,
    addcustomer:addCustomerReducer

})