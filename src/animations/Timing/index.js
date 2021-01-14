import React, { useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";

import {
  Clock,
  Easing,
  Value,
  and,
  block,
  clockRunning,
  cond,
  eq,
  not,
  set,
  startClock,
  stopClock,
  timing,
  useCode,
} from "react-native-reanimated";
import { useClock, useValue } from "react-native-redash";

import Button from "../../../components/Button";

import ChatBubble from "../../../components/ActivityIndicator";

const runTiming = (clock) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    frameTime: new Value(0),
    time: new Value(0),
  };
  const config = {
    toValue: new Value(1),
    duration: 3000,
    easing: Easing.inOut(Easing.ease),
  };
  return block([
    cond(
      not(clockRunning(clock)),
      set(state.time, 0),
      timing(clock, state, config)
    ),

    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
      set(config.toValue, not(state.position)),
    ]),
    state.position,
  ]);
};

const Timing = () => {
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
    elemetsContainer: {
      width,
      height: height - 120,
    },
    buttonContainer: {
      position: "absolute",
      bottom: 0,
      width,
    },
  });

  const [play, setPlay] = useState(false);
  const clock = useClock();
  const progress = useValue(0);
  const isPlaying = useValue(0);
  useCode(() => set(isPlaying, play ? 1 : 0), [play]);
  useCode(
    () => [
      cond(and(isPlaying, not(clockRunning(clock))), startClock(clock)),
      cond(and(not(isPlaying), clockRunning(clock)), stopClock(clock)),
      set(progress, runTiming(clock)),
    ],
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.elemetsContainer}>
        <ChatBubble {...{ progress }} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label={play ? "Pause" : "Play"}
          primary
          onPress={() => setPlay((prev) => !prev)}
        />
      </View>
    </View>
  );
};

export default Timing;
