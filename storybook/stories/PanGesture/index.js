import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { Value, cond, set, eq, add } from "react-native-reanimated";
import { diffClamp, onGestureEvent } from "react-native-redash";

import Spaceman from "../../../components/Spaceman";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  /* spaceman: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, */
});

const PanGesture = () => {
  const { height, width } = useWindowDimensions();

  const state = new Value(State.UNDETERMINED);
  const translationX = new Value(0);
  const translationY = new Value(0);
  const gestureHandler = onGestureEvent({
    state,
    translationX,
    translationY,
  });

  const translateX = translationX;
  const translateY = translationY;

  return (
    <View style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            transform: [{ translateX }, { translateY }],
          }}
        >
          {/* <View style={styles.spaceman}> */}
          <Spaceman />
          {/* </View> */}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PanGesture;
