import {
  FETCH_CUSTOMER_NAME,
  FETCH_CUSTOMER_NAME_FAILURE,
  FETCH_CUSTOMER_NAME_SUCCESS
} from "../actions/types";
const initialState = {
  processing: true,
  data:[],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CUSTOMER_NAME:
      return {
        ...state,
        processing: true
      };
    case FETCH_CUSTOMER_NAME_SUCCESS:
      return {
        ...state,
        data: action.payload,
        processing: false
      };
    case FETCH_CUSTOMER_NAME_FAILURE:
      return {
        ...state,
        error: action.error,
        processing: false
      };
    default:
      return state;
  }
}
