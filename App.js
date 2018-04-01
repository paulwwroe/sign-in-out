import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { StackNavigator } from 'react-navigation';

//  Screens
import SignIn from './screens/SignIn';
import SignOut from './screens/SignOut';
import HomeScreen from './screens/HomeScreen';
import Selfie from './screens/Selfie';
import Barcode from './screens/Barcode';

const AppNavigation = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  SignIn: {
    screen: SignIn
  },
  SignOut: {
    screen: SignOut
  },
  Selfie: {
    screen: Selfie
  },
  Barcode: {
    screen: Barcode
  },
});

export default class App extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {

    return (
      <AppNavigation />
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
