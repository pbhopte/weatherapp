import { takeLatest, all } from 'redux-saga/effects';
import { STOP_LOADING } from '../utils/constants';

export default function* root() {
    yield all([
      // takeLatest(STOP_LOADING, otpRequest),
    ])
  };
  