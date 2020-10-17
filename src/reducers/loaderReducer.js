import { START_LOADING, STOP_LOADING } from "../utils/constants";

const initialState = {
  isLoading: false,
};

// This reducer stores the state of common spinner and modal.
export function loaderReducer (state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

export default loaderReducer;