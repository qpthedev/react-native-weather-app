import React from "react";
import { Stylesheet, Text, View, StyleSheet, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Text style={styles.text}>Getting the fucking weather...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  text: {
    color: "#2f2f2f",
    fontSize: 35,
  },
});
