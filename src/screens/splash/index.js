import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import NavigationService from '../../utils/navigationService';
import LottieView from 'lottie-react-native';
import { SPLASH } from "../../utils/constants";

export default class SplashScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      progress: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
       this.setState({
        progress: false
      }, ()=> NavigationService.resetRoute('HomeScreen'));
    }, 3000);
  }

  render() {
    const {progress} = this.state;
    return (
      <View style={styles.container}>
         <LottieView source={SPLASH} autoPlay loop={progress} />
         <Text style={styles.text}>Weather...</Text>
      </View>
    );
  }
}
