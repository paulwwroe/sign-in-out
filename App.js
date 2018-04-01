import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { StackNavigator } from 'react-navigation';

//  Screens
import SignIn from './screens/SignIn';
import SignOut from './screens/SignOut';
import HomeScreen from './screens/HomeScreen';

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
});

export default class App extends React.Component {

  render() {

    return (
      <AppNavigation>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        </View>
      </AppNavigation>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
