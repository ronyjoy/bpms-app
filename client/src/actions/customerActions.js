import axios from "axios";
import {map,values} from 'lodash';
import {FETCH_CUSTOMER,FETCH_CUSTOMER_SUCCESS,FETCH_CUSTOMER_FAILURE,ADD_CUSTOMER,ADD_CUSTOMER_FAILURE,ADD_CUSTOMER_SUCCESS,FETCH_CUSTOMER_NAME_SUCCESS} from "./types";


export const fetchCustomer = () => async dispatch => {
  dispatch({ type: FETCH_CUSTOMER });
  try {
    const res = await axios.get("/api/customer");
    console.log(res.data);
    dispatch({type: FETCH_CUSTOMER_SUCCESS,payload: res.data});
  } catch (err) {
    // Update error in reducer on failure
    dispatch({type: FETCH_CUSTOMER_FAILURE, error: err});
  }
};

export const fetchCustomerNames = () => async dispatch => {
  dispatch({ type: FETCH_CUSTOMER });
  try {
    const res = await axios.get("/api/customer");
    var customerNames = [];
    res.data.forEach(customer => {
      customerNames.push(""+customer.customername);
    });
    console.log(customerNames);
    dispatch({type: FETCH_CUSTOMER_NAME_SUCCESS,payload: customerNames});
  } catch (err) {
    // Update error in reducer on failure
    dispatch({type: FETCH_CUSTOMER_FAILURE, error: err});
  }
};


export const addCustomer = values => async dispatch => {
  console.log("adding customer")
  dispatch({ type: ADD_CUSTOMER });
  try{
    const res = await axios.post("/api/customer", values);
    dispatch({ type: ADD_CUSTOMER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({type: ADD_CUSTOMER_FAILURE, error: {error:{message:"Duplicate Customer"}}});
    // Update error in reducer on failure
    console.log(err);
  }
};
