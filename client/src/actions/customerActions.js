import axios from "axios";
import {FETCH_CUSTOMER,FETCH_CUSTOMER_SUCCESS,ADD_CUSTOMER,ADD_SUCCESS,
  ADD_CUSTOMER_SUCCESS,FETCH_CUSTOMER_NAME_SUCCESS,FETCH_CUSTOMER_NAME, ADD_ERROR,FETCH_CUSTOMER_FAILURE,FETCH_CUSTOMER_NAME_FAILURE} from "./types";


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
  dispatch({ type: FETCH_CUSTOMER_NAME });
  try {
    const res = await axios.get("/api/customer");
    var customerNames = [];
    res.data.forEach(customer => {
      customerNames.push(""+customer.name);
    });
    console.log(customerNames);
    dispatch({type: FETCH_CUSTOMER_NAME_SUCCESS,payload: customerNames});
  } catch (err) {
    // Update error in reducer on failure
    dispatch({type: FETCH_CUSTOMER_NAME_FAILURE, error: err});
  }
};


export const addCustomer = values => async dispatch => {
  console.log("adding customer")
  dispatch({ type: ADD_CUSTOMER });
  try{
    const res = await axios.post("/api/customer", values);
    dispatch({ type: ADD_CUSTOMER_SUCCESS, payload: res.data });
    dispatch({type: ADD_SUCCESS, success: {message:"customer added"}});
  } catch (err) {
    dispatch({type: ADD_ERROR, error: {message : "customer not added: duplicate customer" } });
  }
};
