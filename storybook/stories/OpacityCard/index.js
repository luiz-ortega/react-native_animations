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
import Button from "../../../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spaceman: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const ClockValuesAndIdentity = () => {
  const clock = new Clock();
  const startAnimation = new Value(0);
  const startTime = new Value(0);
  const duration = 3000;
  const endTime = add(startTime, duration);
  const from = new Value(0);
  const to = new Value(1);
  const opacity = interpolate(clock, {
    inputRange: [startTime, endTime],
    outputRange: [from, to],
    extrapolate: Extrapolate.CLAMP,
  });

  useCode(
    () => [
      cond(eq(startAnimation, 1), [
        startClock(clock),
        set(startTime, clock),
        set(from, not(from)),
        set(to, not(to)),
        set(startAnimation, 0),
      ]),
    ],
    []
  );
  return (
    <View style={styles.container}>
      <View style={styles.spaceman}>
        <Animated.View style={{ opacity }}>
          <Spaceman />
        </Animated.View>
      </View>
      <Button label="Toggle" onPress={() => startAnimation.setValue(1)} />
    </View>
  );
};

export default ClockValuesAndIdentity;
