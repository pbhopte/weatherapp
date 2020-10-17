import { takeLatest, all } from 'redux-saga/effects';
import { WEATHER } from '../utils/constants';
import {weatherRequest} from './weatherSaga';

export default function* root() {
    yield all([
      takeLatest(WEATHER, weatherRequest),
    ])
  };
  