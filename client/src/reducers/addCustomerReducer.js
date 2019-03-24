import {
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE
} from "../actions/types";
const initialState = {
  processing: true,
  data: null,
  error: null,
  saved:null,
};

export default function(state = initialState, action) {
  console.log(state);
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
        saved:true
      };
    default:
      return state;
  }
}
