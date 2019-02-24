import axios from "axios";
import {FETCH_ENQUIRY,FETCH_ENQUIRY_FAILURE,FETCH_ENQUIRY_SUCCESS,ADD_ENQUIRY,ADD_ENQUIRY_SUCCESS,ADD_ENQUIRY_FAILURE} from "./types";


export const fetchEnquries = () => async dispatch => {
  dispatch({ type: FETCH_ENQUIRY });
  try {
    const res = await axios.get("/api/enquiry");
    console.log(res.data);
    dispatch({
      type: FETCH_ENQUIRY_SUCCESS,payload: res.data});
  } catch (err) {
    // Update error in reducer on failure
    dispatch({type: FETCH_ENQUIRY_FAILURE, error: err});
  }
};


export const addEnquiry = values => async dispatch => {
  console.log("adding enquiry")
  dispatch({ type: ADD_ENQUIRY });
  try{
    const res = await axios.post("/api/enquiry", values);
    dispatch({ type: ADD_ENQUIRY_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({type: ADD_ENQUIRY_FAILURE, error: {error:{message:"Failed"}}});
    // Update error in reducer on failure
    console.log(err);
  }
};
