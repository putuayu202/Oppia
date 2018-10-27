import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Component/Login';
import Home from './Component/Home';

const AppNavigator = StackNavigator({
  SettingScreen: { screen: Login},
  HomeScreen: { screen: Home }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
      );
  }
}