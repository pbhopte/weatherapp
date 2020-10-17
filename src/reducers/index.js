import { combineReducers } from 'redux';
import configureStore from '../store/index';
import rootSaga from '../sagas/index';
import loaderReducer from './loaderReducer';
import weatherReducer from './weatherReducer';

export default () => {
  const appReducer = combineReducers({
    loaderReducer,
    weatherReducer
  });
  const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      state = undefined;
    }
    return appReducer(state, action)
  }

  return configureStore(rootReducer, rootSaga);
};
