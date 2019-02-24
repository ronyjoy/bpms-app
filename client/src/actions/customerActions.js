import axios from "axios";
import {
  FETCH_CUSTOMER,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
  ADD_CUSTOMER
} from "./types";

export const fetchCustomer = () => async dispatch => {
  dispatch({ type: FETCH_CUSTOMER });
  try {
    const res = await axios.get("/api/customer");
    console.log(res.data);
    dispatch({
      type: FETCH_CUSTOMER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // Update error in reducer on failure
    dispatch({
      type: FETCH_CUSTOMER_FAILURE,
      error: err
    });
  }
};
export const addCustomer = values => async dispatch => {
  const res = await axios.post("/api/customer", values);
  console.log(res.data);
  dispatch({ type: ADD_CUSTOMER, payload: res.data });
};
