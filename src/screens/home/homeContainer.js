import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from '../../actions/weatherAction';
import * as loaderActions from '../../actions/loaderAction';
import HomeComponent from './homeComponent';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeComponent {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  const { loaderReducer, weatherReducer } = state;
  return {
    isLoading: loaderReducer.isLoading,
    weatherInfo: weatherReducer.data
  };
}

const mapDispatchToProps = (dispatch) => ({
  getSpinner: () => {
    return dispatch(loaderActions.startSpinner());
  },
  getRequestWeatherInfo: (data) => {
    return dispatch(weatherActions.weatherRequest(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);