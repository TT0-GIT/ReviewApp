import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            position: "absolute",
            left: 15,
            backgroundColor: "powderblue",
          }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
