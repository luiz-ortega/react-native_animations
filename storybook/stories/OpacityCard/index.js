import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Clock,
  Extrapolate,
  Value,
  add,
  cond,
  eq,
  interpolate,
  not,
  set,
  startClock,
  useCode,
} from "react-native-reanimated";

import Spaceman from "../../../components/Spaceman";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const ClockValuesAndIdentity = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Spaceman />
      </View>
    </View>
  );
};

export default ClockValuesAndIdentity;
