import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetail({ route, navigation }) {
  const { title, rating, body } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.paragraph}>GameZong rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
      {/* 
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Review Detail")}
      /> */}
      <View style={styles.button}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
