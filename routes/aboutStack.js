import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";
import LeftHeader from "../shared/leftHeader";
import ImageHeader from "../shared/imageHeader";

const Stack = createStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ddd",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          //   title: "About GameZone",
          headerTitle: () => <Header title="About GameZone" />,
          headerLeft: () => <LeftHeader navigation={navigation} />,
          headerBackground: () => <ImageHeader />,
        }}
      />
    </Stack.Navigator>
  );
}
