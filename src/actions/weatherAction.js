import * as CONST from '../utils/constants';

export function weatherRequest(data) {
  return {
    type: CONST.WEATHER,
    data
  };
}

export function weatherSuccess(data) {
  return {
    type: CONST.WEATHER_SUCCESS,
    data
  };
}

export function weatherFaliure(data) {
  return {
    type: CONST.WEATHER_FAILURE,
    data
  };
}