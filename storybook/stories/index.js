import React from "react";

import { storiesOf } from "@storybook/react-native";
// import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CenterView from "./CenterView";
import OpacityCard from "./OpacityCard";
import Transitions from "./Transitions";

storiesOf("Transition", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("opacity", () => <OpacityCard />);

storiesOf("Transition", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("transitions", () => <Transitions />);
