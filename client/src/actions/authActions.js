import axios from "axios";
import { FETCH_USER, FETCH_USER_SUCCESS,FETCH_USER_FAILURE } from "./types";

export const fetchUser = () => async dispatch => {
  dispatch({ type: FETCH_USER });
  try {
    const res = await axios.get("/api/auth/current_user");
    console.log("auth data" );
    console.log( res.data);
    dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
  } catch (err) {
    // Update error in reducer on failure
    dispatch({
      type: FETCH_USER_FAILURE,
      error: err
    });
  }
};
