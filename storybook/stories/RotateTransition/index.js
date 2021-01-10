import React, { useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { mix, transformOrigin, useTimingTransition } from "react-native-redash";
import Spaceman from "../../../components/Spaceman";
import Button from "../../../components/Button";

const { multiply, interpolate } = Animated;

const elements = [1, 2, 3];

const UseTransition = () => {
  const [toggled, setToggled] = useState(true);
  const transitionVal = useTimingTransition(toggled, {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  });
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
    overlay: {
      /* position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0, */
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const newOrigin = -1 * (width / 2);

  return (
    <View style={styles.container}>
      <View style={styles.elemetsContainer}>
        {elements.map((element, index) => {
          const rotation = interpolate(index, {
            inputRange: [0, 1, 2],
            outputRange: [-1, 0, 1],
          });
          const rotate = multiply(rotation, mix(transitionVal, 0, Math.PI / 6));
          return (
            <Animated.View
              key={element}
              style={[
                styles.overlay,
                {
                  transform: transformOrigin(
                    { x: newOrigin, y: 0 },
                    { rotate }
                  ),
                },
              ]}
            >
              <Spaceman medium key={element} />
            </Animated.View>
          );
        })}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          label={toggled ? "Reset" : "Start"}
          onPress={() => setToggled(!toggled)}
        />
      </View>
    </View>
  );
};

export default UseTransition;
