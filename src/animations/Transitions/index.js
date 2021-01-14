import React, { useRef, useState } from "react";
import { Transition, Transitioning } from "react-native-reanimated";
import { StyleSheet, View, useWindowDimensions } from "react-native";

import Spaceman from "../../../components/Spaceman";
import Button from "../../../components/Button";

const elements = [1, 2, 3];

const Transitions = () => {
  const ref = useRef(null);
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
      bottom: 0,
      width,
    },
  });

  const row = {
    id: "row",
    name: "Row",
    layout: {
      container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width,
        height: height - 200,
        position: "absolute",
        bottom: 250,
        top: 20,
        flexDirection: "row",
      },
    },
  };

  const column = {
    id: "column",
    name: "Column",
    layout: {
      container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width,
        height: height - 200,
        position: "absolute",
        bottom: 250,
        top: 20,
      },
    },
  };

  const wrap = {
    id: "wrap",
    name: "Wrap",
    layout: {
      container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: height - 200,
        width,
        position: "absolute",
        bottom: 250,
        top: 20,

        flexDirection: "row",
        flexWrap: "wrap",
      },

      child: {
        width: width / 2,
        height: width / 2,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  };

  const transition = (
    <Transition.Change durationMs={400} interpolation="easeInOut" />
  );

  const [currentLayout, setCurrentLayout] = useState(row.layout);

  const animateLayout = (layout) => {
    if (ref.current) {
      ref.current.animateNextTransition();
    }
    setCurrentLayout(layout);
  };

  return (
    <View style={styles.container}>
      <Transitioning.View
        style={currentLayout.container}
        {...{ ref, transition }}
      >
        {elements.map((element) => (
          <Spaceman small style={currentLayout.child} key={element} />
        ))}
      </Transitioning.View>

      <View style={styles.buttonsContainer}>
        <Button label="Column" onPress={() => animateLayout(column.layout)} />
        <Button label="Row" onPress={() => animateLayout(row.layout)} />
        <Button label="Wrap" onPress={() => animateLayout(wrap.layout)} />
      </View>
    </View>
  );
};

export default Transitions;
