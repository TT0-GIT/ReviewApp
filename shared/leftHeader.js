import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function LeftHeader({ navigation }) {
  return (
    <View>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={() => navigation.openDrawer()}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 15,
  },
});
