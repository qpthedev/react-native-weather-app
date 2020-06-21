import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "218cd633f433e75856794719dd2a1baa";

// export default function App() {
//   useEffect(() => async () => {
//     const status = await Location.requestPermissionsAsync();
//     console.log(status);
//   });

//   return <Loading></Loading>;
// }

export default class App extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
    );
    // console.log(temp);
    this.setState({
      isLoading: false,
      temp,
      condition: weather[0].main,
    });
  };

  getLocation = async () => {
    try {
      const gpsEnabled = await Location.hasServicesEnabledAsync();
      const response = await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // console.log(latitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So tragic!");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading></Loading>
    ) : (
      <Weather temp={Math.round(temp)} condition={condition}></Weather>
    );
  }
}
