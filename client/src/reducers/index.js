import {combineReducers} from 'redux';
import authReducer from './authReducer';
import listCustomerReducer from './listCustomerReducer';
import addCustomerReducer from './addCustomerReducer';
import listEnquiryReducer from './listEnquiryReducer';
import addEnquiryReducer from './addEnquiryReducer';

export default combineReducers({
    auth:authReducer,
    listcustomer:listCustomerReducer,
    addcustomer:addCustomerReducer,
    listenquiry:listEnquiryReducer,
    addenquiry:addEnquiryReducer

})