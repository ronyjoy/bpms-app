import {
  FETCH_ENQUIRY,
  FETCH_ENQUIRY_SUCCESS,
  FETCH_ENQUIRY_FAILURE
} from "../actions/types";
const initialState = {
  processing: true,
  data: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ENQUIRY:
      return {
        ...state,
        processing: true
      };
    case FETCH_ENQUIRY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        processing: false
      };
    case FETCH_ENQUIRY_FAILURE:
      return {
        ...state,
        error: action.error,
        processing: false
      };
    default:
      return state;
  }
}
