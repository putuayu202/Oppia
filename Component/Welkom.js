import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Component/Login';
import Home from './Component/Home';

export default class App extends Component {
  render() {
    return (
    	<View style={style.background}>
    	<Text>Welcome</Text>
		</View>      
      );
  }
}
const style = { 
background:{
    backgroundColor:'#fff',
  }}