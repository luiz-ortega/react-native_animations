import React from "react";
import { Image, View } from "react-native";

import spaceman from "../assets/images/spaceman.jpg";

const Spaceman = ({ small, medium }) => {
  const defaultStyle = { borderRadius: 120 };

  return (
    <View>
      <Image
        style={{
          ...defaultStyle,
          ...(small && { height: 90, width: 90 }),
        }}
        source={spaceman}
      />
    </View>
  );
};

export default Spaceman;
