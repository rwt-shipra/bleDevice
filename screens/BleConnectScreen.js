// @flow
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  NativeModules
} from 'react-native';
import { ListItem, Card } from 'react-native-elements';

import BluetoothItem from '../components/BluetoothItem'
import LoadingView from '../components/LoadingView'
import EmptyLayout from '../components/EmptyLayout'
import BleManager from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;

export default class BleConnectScreen extends Component {
  static navigationOptions = {
    title: 'Connect Ble Device',
  };

  constructor() {
    super();
    this.state = {
      loading: false,
      error: false,
      connected: false
    }
  }

  connectDevice = (peripheral) => {
    this.setState({ loading: true });
    BleManager.connect(peripheral.id).then(() => {
      this.setState({ loading: false, connected: true, error: false });
    }).catch((error) => {
      console.log('Connection error', error);
      this.setState({ loading: false, connected: false, error: true });
    });
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    const item = params.item;
    this.connectDevice(item);
  }
  getView = () => {
    if (this.state.loading)
      return <LoadingView title="Connecting to the device" />
    else if (this.state.error){
      const { params } = this.props.navigation.state;
      const item = params.item;
      return <EmptyLayout
      onPress={() => this.connectDevice(item)}
      color="#e53935"
      btnColor="rgba(92, 99,216, 1)"
      title="Not connected"
      subtitle="Error in connecting device"
      icon="bluetooth-disabled" />
    }
    else
      return <EmptyLayout
        onPress={(item)=>this.props.navigation.navigate('Ssid',{item:item})} 
        title="Connected"
        subtitle="Please proceed further"
        btnText="Proceed Further"
        color="rgba(92, 99,216, 1)"
        btnColor="rgba(92, 99,216, 1)"
        icon="bluetooth-connected" />
  }
  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const item = params.item;
    return (
      <View style={styles.container}>
        <BluetoothItem device={item}  />
        {this.getView()}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: window.width,
    height: window.height,
  }
});