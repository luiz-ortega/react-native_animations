import React from "react";
import { Image, View } from "react-native";

import spaceman from "../assets/images/spaceman.jpg";

const Spaceman = () => {
  return (
    <View>
      <Image style={{ borderRadius: 120 }} source={spaceman} />
    </View>
  );
};

export default Spaceman;
