import React, { Component } from 'react';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';
import { LOADER } from '../../utils/constants';
import * as loaderActions from '../../actions/loaderAction';

class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.isLoading) {
      return null;
    } else {
      return (
        <LottieView source={LOADER} autoPlay />
      );
    }
  }
}

function mapStateToProps(state) {
    const { loaderReducer } = state;
    return {
      isLoading: loaderReducer.isLoading
    };
}
  
const mapDispatchToProps = (dispatch) => ({
    getSpinner: () => {
      return dispatch(loaderActions.stopSpinner());
    }
});
  
  export default connect(mapStateToProps, mapDispatchToProps)(Loader);