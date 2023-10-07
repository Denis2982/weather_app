import React from "react";
import PropTypes from "prop-types";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const weatherOptions = {
  "01d": {    
    imgSource: require("./assets/01d.jpg"),
  },
  "01n": {    
    imgSource: require("./assets/01n.jpg"),
  },
  "02d": {    
    imgSource: require("./assets/02d.jpg"),
  },
  "02n": {    
    imgSource: require("./assets/02n.jpg"),
  },
  "03d": {    
    imgSource: require("./assets/03d.jpg"),
  },
  "03n": {    
    imgSource: require("./assets/02n.jpg"),
  },
  "04d": {    
    imgSource: require("./assets/04d.jpg"),
  },
  "04n": {    
    imgSource: require("./assets/04n.jpg"),
  },
  "09d": {    
    imgSource: require("./assets/09d.jpg"),
  },
  "09n": {    
    imgSource: require("./assets/09d.jpg"),
  },
  "10d": {    
    imgSource: require("./assets/09d.jpg"),
  },
  "10n": {    
    imgSource: require("./assets/09d.jpg"),
  },
  "11d": {    
    imgSource: require("./assets/11d.jpg"),
  },
  "11n": {    
    imgSource: require("./assets/11n.jpg"),
  },
  "13d": {    
    imgSource: require("./assets/13d.jpg"),
  },
  "13n": {    
    imgSource: require("./assets/13n.jpg"),
  },
  "50d": {    
    imgSource: require("./assets/50d.jpg"),
  },
  "50n": {    
    imgSource: require("./assets/50n.jpg"),
  },
  
};

export default function Weather({ temp, condition, like, city, description, speed, humidity, country }) {
  return (
    <ImageBackground
      source={weatherOptions[condition].imgSource}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>{city}</Text>        
        <Text style={styles.headerText}>{country}</Text>        
      </View>
      <View style={styles.mainSection}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.tempLike}>Ощущается как {like}°</Text>

      </View>
      <View style={styles.paramSection}>
        <Text style={styles.paramText}>Скорость ветра  {speed}м/с</Text>
        <Text style={styles.paramText}>Влажность  {humidity}%</Text>
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
    "01d",
    "01n",
    "02d",
    "02n",
    "03d",
    "03n",
    "04d",
    "04n",
    "09d",
    "09n",
    "10d",
    "10n",
    "11d",
    "11n",
    "13d",
    "13n",
    "50d",
    "50n",    
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText:{
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    paddingTop: '15%',
    letterSpacing: 1.2,
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
    textTransform: 'capitalize',
  },
  temp: {
    fontSize: 50,
    color: "white",
    fontWeight: "600",
    marginBottom: 10,
  },
  tempLike:{
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  paramText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
    letterSpacing: 1.1,
  },
  subtitle: {
    color: "white",
    fontWeight: "400",
  },
  
});
