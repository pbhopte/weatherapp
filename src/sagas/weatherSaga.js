import { put, call } from 'redux-saga/effects';
import Config from '../utils/config';
import * as loaderActions from '../actions/loaderAction';
import * as weatherActions from '../actions/weatherAction';
import { CommonFetch } from '../services/api';

const { APIKEY } = Config;

export function* weatherRequest(action) {
    let path = `/data/2.5/onecall?lat=${action.data.lat}&lon=${action.data.long}&exclude=hourly,minutely,alerts&appid=${APIKEY}&units=metric`
    try {
        const res = yield call(CommonFetch, path);
        if (res.status === 201 || res.status === 204 || res.status === 200) {
            yield put(loaderActions.stopSpinner());
            yield put(weatherActions.weatherSuccess(res.data));
        } else {
            yield put(loaderActions.stopSpinner());
            yield put(weatherActions.weatherFaliure(null));
        }
    } catch (error) {
        yield put(loaderActions.stopSpinner());
        yield put(weatherActions.weatherFaliure(null));
    }
}