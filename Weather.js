import React from "react";
import PropTypes from "prop-types";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const weatherOptions = {
  Thunderstorm: {
    title: "Гроза",
    imgSource: require("./assets/thunderstorm.jpg"),
  },
  Clear: {
    title: "Ясно",
    imgSource: require("./assets/clear.jpg"),
  },
  Drizzle: {
    title: "Морось",
    imgSource: require("./assets/drizzle.jpg"),
  },
  Rain: {
    title: "Дождь",
    imgSource: require("./assets/rain.jpg"),
  },
  Snow: {
    title: "Снег",
    imgSource: require("./assets/snow.jpg"),
  },
  Mist: {
    title: "Туман",
    imgSource: require("./assets/mist.jpg"),
  },
  Smoke: {
    title: "Дымка",
    imgSource: require("./assets/smoke.jpg"),
  },
  Haze: {
    title: "Туман",
    imgSource: require("./assets/mist.jpg"),
  },
  Dust: {
    title: "Пыль",
    imgSource: require("./assets/dust.jpg"),
  },
  Fog: {
    title: "Туман",
    imgSource: require("./assets/mist.jpg"),
  },
  Sand: {
    title: "Пыль",
    imgSource: require("./assets/dust.jpg"),
  },
  Ash: {
    title: "Пыль",
    imgSource: require("./assets/dust.jpg"),
  },
  Squall: {
    title: "Шквал",
    imgSource: require("./assets/squall.jpg"),
  },
  Tornado: {
    title: "Торнадо",
    imgSource: require("./assets/tornado.jpg"),
  },
  Clouds: {
    title: "Облачно",
    imgSource: require("./assets/clouds.jpg"),
  },
};

export default function Weather({ temp, condition, like, city, description }) {
  return (
    <ImageBackground
      source={weatherOptions[condition].imgSource}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>{city}</Text>        
      </View>
      <View style={styles.mainSection}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.tempLike}>Ощущается как {like}°</Text>

      </View>
      <View style={styles.paramSection}>
        <Text style={styles.title}></Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  like: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header:{
    flex: 1,
        
  },
  headerText:{
    color: "white",
    fontSize: 20,
    fontWeight: "300",
    paddingTop: '15%'
  },
  mainSection:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  paramSection: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  description:{
    color: "white",
    fontSize: 30,
    fontWeight: "400",
    marginBottom: 10,
  },
  temp: {
    fontSize: 50,
    color: "white",
    fontWeight: "600",
  },
  tempLike:{
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
  },
  
});
