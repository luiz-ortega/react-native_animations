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
    elementsContainer: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      /*       borderWidth: 1,
      borderColor: "#060", */
      width,
      height: height - 200,
      position: "absolute",
      bottom: 250,
      top: 20,
    },
    buttonsContainer: {
      position: "absolute",
      bottom: 0,
      width,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.elementsContainer}>
        {elements.map((element) => (
          <Spaceman small key={element} />
        ))}
      </View>

      <View style={styles.buttonsContainer}>
        <Button label="Column" onPress={() => {}} />
        <Button label="Row" onPress={() => {}} />
        <Button label="Wrap" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Transitions;
