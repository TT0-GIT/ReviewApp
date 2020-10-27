import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title }) {
  return (
    <View style={styles.headerTitle}>
      <Image
        source={require("../assets/heart_logo.png")}
        style={styles.headerImage}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  headerImage: {
    width: 22,
    height: 22,
    marginRight: 5,
  },
});
