import React from 'react';
import Judul from './Judul.js';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={warna.warnafont}>Welcome</Text>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C4000C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const warna = StyleSheet.create({
  warnafont: {
    fontSize:50,
    color: '#fff',
  },
});