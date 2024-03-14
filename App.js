import * as React from "react";
// Libraries
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";

// Screens
import GetStarted from "./src/screens/GetStarted";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";
import Policy from "./src/screens/Policy";

// Application Theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#131415",
  },
};

// Navigation
const Stack = createNativeStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    Lora: require("./assets/fonts/Lora.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer theme={MyTheme}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={"light-content"}
        ></StatusBar>
        <Stack.Navigator
          initialRouteName="GetStarted"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Policy" component={Policy} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
