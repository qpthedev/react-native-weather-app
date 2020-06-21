import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Thunder, th-th-thunder, thunder",
    subtitle: "Thunder, feel the thunder",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#7F7FD5", "#86A8E7", "#91EAE4"],
    title: "Drizzle",
    subtitle: "Will still get you wet",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#005C97", "#363795"],
    title: "Rain",
    subtitle: "Free shower",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#E6DADA", "#274046", "#E6DADA"],
    title: "Snow",
    subtitle: "For more info, look outside",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#3d72b4", "#525252"],
    title: "Cloudy",
    subtitle: "Some shady weather",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FFFFFF", "#6DD5FA", "#2980B9"],
    title: "Clear",
    subtitle: "Actually some nice weather",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#667db6", "#0082c8", "#667db6"],
    title: "Mist",
    subtitle: "Like looking at things with no glasses",
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#667db6", "#0082c8", "#667db6"],
    title: "Foggy",
    subtitle: "Misty, but worse",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#7F7FD5", "#86A8E7"],
    title: "Smoke",
    subtitle: "Nothing sexy about this",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#7F7FD5", "#86A8E7"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#CAC531", "#F3F9A7"],
    title: "Dust",
    subtitle: "Just don't go outside",
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#CAC531", "#F3F9A7"],
    title: "Sand",
    subtitle: "Just don't go outside",
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#3E5151", "#DECBA4"],
    title: "Ash",
    subtitle: "Just don't go outside",
  },
  Squall: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Squall",
    subtitle: "This too, shall pass",
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#E6DADA", "#274046"],
    title: "Tornado",
    subtitle: "Hiring new wizards",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>

      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  temp: {
    fontSize: 35,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
  },
});
