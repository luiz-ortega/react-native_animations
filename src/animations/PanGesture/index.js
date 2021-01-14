import React from "react";
import { View, useWindowDimensions, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, {
  Value,
  cond,
  set,
  eq,
  add,
  block,
  defined,
  sub,
  min,
  max,
} from "react-native-reanimated";
import { onGestureEvent } from "react-native-redash/lib/module/v1";

import Spaceman from "../../components/Spaceman";

/* const { width, height } = Dimensions.get("window"); */

const diff = (v) => {
  const stash = new Animated.Value(0);
  const prev = new Animated.Value();
  return block([
    set(stash, cond(defined(prev), sub(v, prev), 0)),
    set(prev, v),
    stash,
  ]);
};

const diffClamp = (
  a,
  minVal: Animated.Adaptable,
  maxVal: Animated.Adaptable
) => {
  const value = new Animated.Value();
  return set(
    value,
    min(max(add(cond(defined(value), value, a), diff(a)), minVal), maxVal)
  );
};

const withOffset = (value, state, offset = new Value(0)) =>
  cond(
    eq(state, State.END),
    [set(offset, add(offset, value)), offset],
    add(offset, value)
  );

const PanGesture = () => {
  const { height, width } = useWindowDimensions();

  const state = new Value(State.UNDETERMINED);
  const translationX = new Value(0);
  const translationY = new Value(0);
  const gestureHandler = onGestureEvent({
    translationX,
    translationY,
    state,
  });

  const translateX = diffClamp(withOffset(translationX, state), 0, width - 90);
  const translateY = diffClamp(withOffset(translationY, state), 0, height - 90);

  return (
    <View>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            transform: [{ translateX }, { translateY }],
          }}
        >
          <Spaceman small />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PanGesture;
