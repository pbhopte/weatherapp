import { WEATHER, WEATHER_SUCCESS, WEATHER_FAILURE } from "../utils/constants";

const initialState = {
  data: null,
  dataError: false
};

// This reducer stores the state of common spinner and modal.
export function weatherReducer (state = initialState, action) {
  switch (action.type) {
    case WEATHER:
      return {
        ...state,
      };
    case WEATHER_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataError: false
      };
    case WEATHER_FAILURE:
      return {
        ...state,
        data: null,
        dataError: true
      };
    default:
      return state;
  }
}

export default weatherReducer;