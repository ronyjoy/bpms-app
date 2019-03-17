import { ADD_SUCCESS, REMOVE_SUCCESS } from "../actions/types";
const initialState = {
  success:null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_SUCCESS:
    return {
      ...state,
      success: action.success,
    };
    case REMOVE_SUCCESS:
    return {
      ...state,
      success: null,
    };
    default:
      return state;
  }
}
