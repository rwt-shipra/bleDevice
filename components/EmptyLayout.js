import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

// or any pure javascript modules available in npm
import { Card, Text, Button, Icon } from 'react-native-elements'; // Version can be specified in package.json
export default class EmptyLayout extends Component {
  render() {
    return (
      <Card containerStyle={styles.emptyContainer}>
        <Icon name={this.props.icon} size={48} color={this.props.color} />
        <Text style={[styles.centerText, { fontSize: 18, fontWeight: 'bold' }]}>
          {this.props.title}
        </Text>
        <Text style={[styles.centerText, { fontSize: 16 }]}>
          {this.props.subtitle}
        </Text>
        <Button
          title={this.props.btnText?this.props.btnText:"Try Again"}
          loading={false}
          onPress={()=>this.props.onPress()}
          buttonStyle={[
            styles.emptyButton,
            {
              backgroundColor: this.props.btnColor
                ? this.props.btnColor
                : '#9E9E9E',
            },
          ]}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,
  },
  emptyButton: {
    backgroundColor: 'rgba(92, 99,216, 1)',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 10,
  },
  centerText: {
    alignSelf: 'center',
    padding: 4,
  },
});
