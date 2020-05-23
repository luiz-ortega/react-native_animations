import React from "react";
import { StyleSheet, View } from "react-native";

import Spaceman from "../../../components/Spaceman";
import Button from "../../../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Transitions = () => {
  return (
    <View style={styles.container}>
      <Spaceman />
      <View style={styles.buttons}>
        <Button label="1" onPress={() => {}} />
        <Button label="2" onPress={() => {}} />
        <Button label="3" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Transitions;
