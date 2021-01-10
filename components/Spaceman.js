import React from "react";
import { Image, View } from "react-native";

import spaceman from "../assets/images/spaceman.jpg";

const Spaceman = ({ small, medium, style = {} }) => {
  const defaultStyle = {
    ...(small && { height: 90, width: 90 }),
    ...(medium && { height: 150, width: 150 }),
    borderRadius: 120,
  };

  return (
    <View style={style}>
      <Image
        style={{
          ...defaultStyle,
        }}
        source={spaceman}
      />
    </View>
  );
};

export default Spaceman;
