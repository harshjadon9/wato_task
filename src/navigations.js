import React from "react";
// import { App } from "./App";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
// import HomeScreen from "./src/screens/HomeScreen";


// import HomeScreen from "./src/screens/home";

// import LoginScreen from "./src/screens/login";

const Stack = createStackNavigator();

export default function navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
}
