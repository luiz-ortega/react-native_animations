import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OpacityCard from "./src/animations/OpacityCard";
import PanGesture from "./src/animations/PanGesture";

export default function App() {
  return (
    <View>
      <PanGesture />
    </View>
  );
}
