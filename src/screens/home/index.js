import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import { LOADER } from '../../utils/constants';
import Error from '../../components/error';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: false,
      isError: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        progress: false,
        isError: false
      });
    }, 2000);
  }

  onRetry() {
    this.setState({
      isError: false,
      progress: true
    }, () =>
      setTimeout(() => {
        this.setState({
          progress: false,
        });
      }, 2000)
    );
  }

  render() {
    const { progress, isError } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.topContent}>
            <View style={styles.top}>
              <Text style={styles.bigText}>10</Text>
              <Text style={styles.smallText}>Delhi</Text>
            </View>
          </View>
          <View>
            <View style={styles.row}>
              <Text style={[styles.smallText, styles.margin]}>Monday</Text>
              <Text style={[styles.weather, styles.margin]}>10</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.smallText, styles.margin]}>Tuesday</Text>
              <Text style={[styles.weather, styles.margin]}>10</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.smallText, styles.margin]}>Wednesday</Text>
              <Text style={[styles.weather, styles.margin]}>10</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.smallText, styles.margin]}>Thursday</Text>
              <Text style={[styles.weather, styles.margin]}>10</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.smallText, styles.margin]}>Friday</Text>
              <Text style={[styles.weather, styles.margin]}>10</Text>
            </View>
          </View>
          {progress ? <LottieView source={LOADER} autoPlay /> : null}
          {isError ? <Error retry={() => this.onRetry()} /> : null}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
