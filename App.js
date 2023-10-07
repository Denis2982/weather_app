import React from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import Loading from "./Loading";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "3a3b263487223dba791502461c12d8ea";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  // https://api.openweathermap.org/data/2.5/weather?lat=49.915&lon=35.55028&appid=3a3b263487223dba791502461c12d8ea&units=metric

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp, feels_like, humidity },
        weather,
        name,
        wind: { speed },
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`
    );
    this.setState({
      isLoading: false,
      temp: temp,
      like: feels_like,
      humidity: humidity,
      speed: speed,
      condition: weather[0].icon,
      description: weather[0].description,
      city: name,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Невозможно определить местоположение");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, like, condition, description, city, speed, humidity } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        like={Math.round(like)}
        speed={Math.round(speed)}
        humidity={humidity}
        condition={condition}
        description={description}
        city={city}
      />
    );
  }
}
