import React, { Component } from 'react';
import { Text, View, SafeAreaView, ScrollView, Platform, PermissionsAndroid } from 'react-native';
import styles from './styles';
import Error from '../../components/error';
import Geolocation from '@react-native-community/geolocation';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      currentLongitude: '',
      currentLatitude: '',
      locationStatus: ''
    }
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  getCurrentLocation() {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        this.getOneTimeLocation();
        //this.subscribeLocationLocation();
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
            //this.subscribeLocationLocation();
          } else {
            this.setState({ locationStatus: 'Permission Denied' })
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(this.watchID);
    };
  };

  getOneTimeLocation = () => {
    this.setState({ locationStatus: 'Getting Location ...' })

    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        this.setState({ locationStatus: 'You are Here ...' })
        console.log('current position===', position);
        let data = {
          lat: JSON.stringify(position.coords.latitude),
          long: JSON.stringify(position.coords.longitude)
        }
        this.props.getRequestWeatherInfo(data);
        //getting the Longitude from the location json
        this.setState({ currentLongitude: JSON.stringify(position.coords.longitude) });

        //getting the Latitude from the location json
        this.setState({ currentLatitude: JSON.stringify(position.coords.latitude) });

      },
      (error) => {
        this.setState({ locationStatus: error.message })
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

        this.setState({ locationStatus: 'You are Here ...' })
        console.log('position change===', position);
        let data = {
          lat: JSON.stringify(position.coords.latitude),
          long: JSON.stringify(position.coords.longitude)
        }
        this.props.getRequestWeatherInfo(data);
        //getting the Longitude from the location json        
        this.setState({ currentLongitude: JSON.stringify(position.coords.longitude) });

        //getting the Latitude from the location json
        this.setState({ currentLatitude: JSON.stringify(position.coords.latitude) });

      },
      (error) => {
        this.setState({ locationStatus: error.message })
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

  onRetry() {
    setTimeout(() => {
      this.setState({
        isError: false,
      });
    }, 2000)
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
          {isError ? <Error retry={() => this.onRetry()} /> : null}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;