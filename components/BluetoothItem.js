// @flow
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { ListItem, Card } from 'react-native-elements';

export default class BluetoothItem extends Component {
  render() {
    return (

      <Card style={{ padding: 0 }}>
        <ListItem
          onPress={() => this.props.click(this.props.device)}
          key={this.props.device.id}
          title={this.props.device.name ? this.props.device.name : "UNKNOWN NAME"}
          subtitle={this.props.device.id}
          leftIcon={{ name: "bluetooth" ,color:this.props.color}}
        />
      </Card>
    );
  }
}
