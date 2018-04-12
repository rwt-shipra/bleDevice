import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import BleConnectScreen from './screens/BleConnectScreen'
import  SsidScreen from './screens/SsidScreen'
import SplashScreen from 'react-native-splash-screen'
import BleManager from 'react-native-ble-manager';


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
      
      BleManager.enableBluetooth()
      .then(() => {
        // Success code
       
        console.log('The bluetooh is already enabled or the user confirm');
       
      })
      .catch((error) => {
        // Failure code
        console.log('The user refuse to enable bluetooth');
      });
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Connect:{
      screen: BleConnectScreen,
    },
    Ssid:{
      screen: SsidScreen,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(92, 99,216, 1)',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
