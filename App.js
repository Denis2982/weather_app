import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';

export default class extends React.Component {

  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
    } catch (error) {
      Alert.alert('Невозможно определить местоположение');
    }    
  }

  componentDidMount() {
    this.getLocation();
  }

  render(){
    return (
      <Loading />
    );
  }
}


