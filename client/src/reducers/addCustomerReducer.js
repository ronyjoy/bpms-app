import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE
} from "../actions/types";
const initialState = {
  loading: true,
  data: {},
  error: null
};

export default function(state = initialState, action) {
  console.log(action.type);
  console.log(action.error);  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        loading: true,
        error:null
      };
    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error:null
      };
    case ADD_CUSTOMER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
