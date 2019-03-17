import {combineReducers} from 'redux';
import authReducer from './authReducer';
import listCustomerReducer from './listCustomerReducer';
import addCustomerReducer from './addCustomerReducer';
import listEnquiryReducer from './listEnquiryReducer';
import addEnquiryReducer from './addEnquiryReducer';
import listCustomerNameReducer from './listCustomerNameReducer';
import errorReducer from './errorReducer';
import successReducer from './successReducer';

export default combineReducers({
    auth:authReducer,
    listcustomer:listCustomerReducer,
    listcustomernames:listCustomerNameReducer,
    addcustomer:addCustomerReducer,
    listenquiry:listEnquiryReducer,
    addenquiry:addEnquiryReducer,
    error_message:errorReducer,
    success_message:successReducer,

})