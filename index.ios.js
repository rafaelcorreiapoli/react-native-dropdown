/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import Dropdown from './src/Dropdown'

const options = [{
  label: 'Windows',
  value: 'windows'
}, {
  label: 'OS X',
  value: 'osx'
}, {
  label: 'Linux',
  value: 'linux'
}, {
  label: 'Android',
  value: 'android'
}, {
  label: 'iOS',
  value: 'ios'
}, {
  label: 'Firefox',
  value: 'firefox'
}]

export default class dropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favoriteOS: undefined
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Another field..."
          />
        </View>
          <Dropdown
            placeholder="Select your favorite OS..."
            options={options}
            value={this.state.favoriteOS}
            onChange={favoriteOS => this.setState({ favoriteOS })}
            containerStyle={styles.dropdownContainerStyle}
            limitDropdownOptionsOnView={4}
            floating
            appearence={'flat'}
            selectedStyle={{
              backgroundColor: 'mediumorchid'
            }}
            textSelectedStyle={{
              color: 'white'
            }}
            iconSelectedStyle={{
              color: 'white'
            }}

            optionsContainerStyle={{
              marginTop: 0
            }}

            placeholderStyle={{
              color: 'lightgrey'
            }}
            labelStyle={{
              color: 'darkgray'
            }}
          />

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Another field..."
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Another field..."
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Another field..."
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInputContainer: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: 'rgb(245, 245, 245)',
    borderBottomWidth: 1,
    zIndex: 0,
  },
  dropdownContainerStyle: {
    // borderBottomColor: 'rgb(245, 245, 245)',
    // borderBottomWidth: 1,
  },
  textInput: {
    height: 40,
  }
});

AppRegistry.registerComponent('dropdown', () => dropdown);
