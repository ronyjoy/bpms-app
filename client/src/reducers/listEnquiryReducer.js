import {
  FETCH_ENQUIRY,
  FETCH_ENQUIRY_SUCCESS,
  FETCH_ENQUIRY_FAILURE
} from "../actions/types";
const initialState = {
  loading: true,
  data: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ENQUIRY:
      return {
        ...state,
        loading: true
      };
    case FETCH_ENQUIRY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case FETCH_ENQUIRY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
