import { combineReducers } from 'redux';
import configureStore from '../store/index';
import rootSaga from '../sagas/index';
import loaderReducer from './loaderReducer';

export default () => {
  const appReducer = combineReducers({
    loaderReducer,
  });
  const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      state = undefined;
    }
    return appReducer(state, action)
  }

  return configureStore(rootReducer, rootSaga);
};
