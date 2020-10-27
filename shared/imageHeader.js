import React from "react";
import { StyleSheet, ImageBackground } from "react-native";

const ImageHeader = () => (
  <ImageBackground
    style={StyleSheet.absoluteFill}
    source={require("../assets/game_bg.png")}
  />
);

export default ImageHeader;
