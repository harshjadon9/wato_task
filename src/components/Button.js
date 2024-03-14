//import liraries
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, variables } from "../base";

// create a component
const StartButton = ({ title, onClick, type, icon }) => {
  if (type == "main") {
    return (
      // Get Started Button

      <TouchableOpacity
        onPress={onClick}
        activeOpacity={variables.activeOpacity}
      >
        {/* Gradient for the Borders */}

        <LinearGradient
          colors={["#ffffff", "#2E2F30"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.gradient}
        >
          {/* Button Gradient */}
          <LinearGradient
            colors={["#2E2F30", "#141517"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.gradient2}
          >
            <View style={styles.container}>
              <Text style={styles.text}>{title}</Text>
            </View>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else if (type == "filled") {
    return (
      // login | sign up button

      <TouchableOpacity
        onPress={onClick}
        style={styles.filled}
        activeOpacity={variables.activeOpacity}
      >
        <Text style={[styles.text, { color: "black" }]}>{title}</Text>
      </TouchableOpacity>
    );
  } else if (type == "bordered") {
    return (
      // google sign in button

      <TouchableOpacity
        activeOpacity={variables.activeOpacity}
        onPress={onClick}
        style={[styles.filled, styles.bordered]}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {icon}
          <View style={{ width: 5 }}></View>
          <Text style={[styles.text, { color: "white", textAlign: "center" }]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  gradient: {
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    width: "100%",
  },
  gradient2: {
    width: "99.5%",
    alignSelf: "center",
    height: 48,
    borderRadius: 10,
  },
  container: {
    borderRadius: 10,
    height: 48,
    justifyContent: "center",
  },
  filled: {
    borderRadius: 5,
    backgroundColor: colors.primary,
    width: "100%",
    height: 40,
    justifyContent: "center",
  },
  bordered: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    color: "white",
    fontWeight: "900",
    fontSize: 14,
    textAlign: "center",
  },
});

//make this component available to the app
export default StartButton;
