import {
  ADD_ENQUIRY,
  ADD_ENQUIRY_SUCCESS,
  ADD_ENQUIRY_FAILURE
} from "../actions/types";
const initialState = {
  loading: true,
  data: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ENQUIRY:
      return {
        ...state,
        loading: true,
        error:null
      };
    case ADD_ENQUIRY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error:null
      };
    case ADD_ENQUIRY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
