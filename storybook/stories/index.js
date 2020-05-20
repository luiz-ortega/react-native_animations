import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";
import CenterView from "./CenterView";
import Welcome from "./Welcome";
import OpacityCard from "./OpacityCard";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button onPress={action("clicked-text")}>
      <Text>Hello Button!</Text>
    </Button>
  ));

storiesOf("Transition", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("opacity", () => <OpacityCard />);
