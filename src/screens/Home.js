//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, variables } from "../base";

// create a component
const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.head}>Home Screen</Text>
      <Text style={styles.subHead}>After successfully Authentication</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    fontWeight: "900",
    color: colors.primary,
    textAlign: "center",
  },
  subHead: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
    opacity: variables.baseOpactity,
  }
});

//make this component available to the app
export default Home;
