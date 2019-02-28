import {
  ADD_ENQUIRY,
  ADD_ENQUIRY_SUCCESS,
  ADD_ENQUIRY_FAILURE
} from "../actions/types";
const initialState = {
  processing: true,
  data: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ENQUIRY:
      return {
        ...state,
        processing: true,
        error:null
      };
    case ADD_ENQUIRY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        processing: false,
        error:null
      };
    case ADD_ENQUIRY_FAILURE:
      return {
        ...state,
        error: action.error,
        processing: false
      };
    default:
      return state;
  }
}
