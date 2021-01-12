import React from "react";

import { storiesOf } from "@storybook/react-native";

import CenterView from "./CenterView";
import OpacityCard from "./OpacityCard";
import Transitions from "./Transitions";
import RotateTransition from "./RotateTransition";
import Timing from "./Timing";
import PanGesture from "./PanGesture";

storiesOf("Animation", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Opacity", () => <OpacityCard />)
  .add("Transitions", () => <Transitions />)
  .add("Rotate Transition", () => <RotateTransition />)
  .add("Timing", () => <Timing />)
  .add("PanGesture", () => <PanGesture />);
