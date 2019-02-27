import {
  FETCH_CUSTOMER,
  FETCH_CUSTOMER_FAILURE,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_NAME_SUCCESS
} from "../actions/types";
const initialState = {
  loading: true,
  data: {},
  customerNames:[],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CUSTOMER:
      return {
        ...state,
        loading: true
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case FETCH_CUSTOMER_NAME_SUCCESS:
      return {
        ...state,
        customerNames: action.payload,
        loading: false
      };
    case FETCH_CUSTOMER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
