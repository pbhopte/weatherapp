import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/home/homeContainer';

const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen, navigationOptions: { headerShown: false }},
    HomeScreen: { screen: HomeScreen, navigationOptions: { headerShown: false }}
  },
  {
    initialRouteName: 'SplashScreen',
    headerShown: false,
    defaultNavigationOptions: {
      gestureEnabled: false
    },
  }
);

export default createAppContainer(StackNavigator);

