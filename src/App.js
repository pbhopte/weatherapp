import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import createStore from './reducers';
import Root from './routes';
import NavigationService from './utils/navigationService';
import Spinner from './components/loader';

const { store, persistor } = createStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

/**
  * A loading indicator to show any process is under progress and UI can be blocked during that duration.
**/
  spinner() {
    return (
      <Spinner />
    );
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          />
          {this.spinner()}
        </PersistGate>
      </Provider>
    );
  }
}