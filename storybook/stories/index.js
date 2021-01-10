import React from "react";

import { storiesOf } from "@storybook/react-native";
// import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CenterView from "./CenterView";
import OpacityCard from "./OpacityCard";
import Transitions from "./Transitions";

storiesOf("Animation", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Opacity", () => <OpacityCard />)
  .add("Transitions", () => <Transitions />);
