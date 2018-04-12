import React, { Component } from 'react';
import { StyleSheet,ActivityIndicator } from 'react-native';

// or any pure javascript modules available in npm
import { Card, Text, Button, Icon } from 'react-native-elements'; // Version can be specified in package.json
export default class LoadingView extends Component {
  render() {
    return (
      <Card containerStyle={styles.emptyContainer}>
        <ActivityIndicator size="large" color="rgba(92, 99,216, 1)" />
        <Text style={[styles.centerText, { fontSize: 14, fontWeight: 'bold' }]}>
          {this.props.title}
        </Text>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    height:220,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,
  },
  centerText: {
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
  },
});
