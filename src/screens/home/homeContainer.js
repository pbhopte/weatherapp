import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from '../../actions/weatherAction';
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
  const { weatherReducer } = state;
  return {
    weatherInfo: weatherReducer.data
  };
}

const mapDispatchToProps = (dispatch) => ({
  getRequestWeatherInfo: (data) => {
    return dispatch(weatherActions.weatherRequest(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);