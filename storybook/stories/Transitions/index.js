import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

import Spaceman from "../../../components/Spaceman";
import Button from "../../../components/Button";

const elements = [1, 2, 3];

const Transitions = () => {
  const { height, width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      height,
      width,
    },
    buttonsContainer: {
      position: "absolute",
      width,
      bottom: 0,
    },
  });

  return (
    <View style={styles.container}>
      {elements.map((element) => (
        <Spaceman small key={element} />
      ))}
      <View style={styles.buttonsContainer}>
        <Button label="Column" onPress={() => {}} />
        <Button label="Row" onPress={() => {}} />
        <Button label="Wrap" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Transitions;
