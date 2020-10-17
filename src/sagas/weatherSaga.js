import { put, call } from 'redux-saga/effects';
import * as loaderActions from '../actions/loaderAction';
import * as weatherActions from '../actions/weatherAction';
import { CommonFetch } from '../services/api';

export function* weatherRequest(action) {
    yield put(loaderActions.startSpinner());
    try {
        const res = yield call(CommonFetch, action.data);
        if (res) {
            console.log("==== weather request output =====", res);
            yield put(loaderActions.stopSpinner());
            yield put(weatherActions.weatherSuccess(res));
        } else {
            console.log("==== weathe request error1 =====", res);
            yield put(loaderActions.stopSpinner());
            yield put(weatherActions.weatherFaliure(null));
        }
    } catch (error) {
        console.log("==== weather request error2 =====", error);
        yield put(loaderActions.stopSpinner());
        yield put(weatherActions.weatherFaliure(error));
    }
}