import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Platform, PermissionsAndroid, Alert } from 'react-native';
import styles from './styles';
import Error from '../../components/error';
import Geolocation from '@react-native-community/geolocation';
import { getCityName, getWeekends } from '../../services/api';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      weatherData: null,
      latitude: '',
      longitude: '',
      currentCity: '...Fetching'
    }
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  getCurrentLocation() {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        this.getOneTimeLocation();
        this.subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            this.getOneTimeLocation();
            this.subscribeLocationLocation();
          } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
            Alert.alert(
              `You can't deny the permission! Otherwise, you would not be able to use this application`,
              [{ text: 'OK', onPress: () => this.getCurrentLocation() }]
            );
          } else { }
        } catch (err) {
          console.log(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(this.watchID);
    };
  };

  getWeatherForecastCall(data) {
    const { getSpinner, getRequestWeatherInfo } = this.props;
    let body = `data/reverse-geocode-client?latitude=${data.lat}&longitude=${data.long}&localityLanguage=en`

    getSpinner();
    getCityName(body).then((res) => {
      this.setState({ currentCity: res.locality, isError: false });
    });
    setTimeout(() => getRequestWeatherInfo(data), 3000);
  }

  getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        this.setState({
          latitude: JSON.stringify(position.coords.latitude),
          longitude: JSON.stringify(position.coords.longitude)
        });
        let data = {
          lat: JSON.stringify(position.coords.latitude),
          long: JSON.stringify(position.coords.longitude)
        }
        this.getWeatherForecastCall(data);
      },
      (error) => {
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  subscribeLocationLocation = () => {
    this.watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        this.setState({
          latitude: JSON.stringify(position.coords.latitude),
          longitude: JSON.stringify(position.coords.longitude)
        });
        let data = {
          lat: JSON.stringify(position.coords.latitude),
          long: JSON.stringify(position.coords.longitude)
        }
        this.getWeatherForecastCall(data);
      },
      (error) => {
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  componentDidMount() {
    this.getCurrentLocation();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.weatherInfo !== state.weatherData) {
      return {
        weatherData: props.weatherInfo,
      };
    } 
    if (props.dataError !== state.isError) {
      return {
        isError: true
      };
    }
  }

  onRetry() {
    const { latitude, longitude } = this.state;
    let data = {
      lat: latitude,
      long: longitude
    };
    this.setState({
      isError: false,
    }, () => this.getWeatherForecastCall(data));
  }

  render() {
    const { weatherData, isError, currentCity } = this.state;
    const { isLoading } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        { !isLoading && weatherData != null ?
          <ScrollView style={styles.container}>
            <View style={styles.topContent}>
              <View style={styles.top}>
                <Text style={styles.bigText}>{weatherData.current.temp}</Text>
                <Text style={styles.smallText}>{currentCity}</Text>
              </View>
            </View>
            {
              weatherData && weatherData.daily.length > 0 ?
                weatherData.daily.map((value, key) => {
                  return (
                    <View key={key}>
                      <View style={styles.row}>
                        <Text style={[styles.smallText, styles.margin]}>{getWeekends(key)}</Text>
                        <Text style={[styles.weather, styles.margin]}>{value.temp.max}</Text>
                      </View>
                    </View>)
                }) : null
            }

          </ScrollView> : null
        }
        {!isLoading && isError && weatherData == null ? <Error retry={() => this.onRetry()} /> : null}
      </SafeAreaView>
    );
  }
}

export default HomeScreen;