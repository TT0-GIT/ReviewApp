import React from "react";
import { Animated } from "react-native";

import {
  createStackNavigator,
  //   TransitionSpecs,
  //   HeaderStyleInterpolators,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";
import Header from "../shared/header";
import LeftHeader from "../shared/leftHeader";
import ImageHeader from "../shared/imageHeader";

// const forFade = ({ current, next }) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: { opacity },
//     rightButtonStyle: { opacity },
//     titleStyle: { opacity },
//     backgroundStyle: { opacity },
//   };
// };

// const config = {
//   animation: "spring",
//   config: {
//     stiffness: 1000,
//     damping: 500,
//     mass: 3,
//     overshootClamping: true,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Home}
        options={{
          //   title: "My home",
          headerTitle: () => <Header title="GameZone" />,
          headerLeft: () => <LeftHeader navigation={navigation} />,
          headerBackground: () => <ImageHeader />,
        }}
      />
      <Stack.Screen
        name="Review Detail"
        component={ReviewDetail}
        options={({ route }) => ({
          title: route.params.title,
          //   transitionSpec: {
          //     open: config,
          //     close: config,
          //   },
          //   cardStyleInterpolator: forFade,
          //   headerStyleInterpolator: HeaderStyleInterpolators.forStatic,

          //   transitionSpec: {
          //     open: TransitionSpecs.TransitionIOSSpec,
          //     close: TransitionSpecs.TransitionIOSSpec,
          //   },
        })}
      />
    </Stack.Navigator>
  );
}
