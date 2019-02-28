import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE
} from "../actions/types";
const initialState = {
  processing: true,
  data: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        processing: true,
        error:null
      };
    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        processing: false,
        error:null
      };
    case ADD_CUSTOMER_FAILURE:
      return {
        ...state,
        error: action.error,
        processing: false
      };
    default:
      return state;
  }
}
