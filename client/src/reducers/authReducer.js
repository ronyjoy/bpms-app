import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "../actions/types";

const initialState = {
  processing: true,
  data: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        processing: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        processing: false
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        processing: false
      };
    default:
      return state;
  }
}
