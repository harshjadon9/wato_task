//import liraries
import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { colors, svgs } from "../base";
import Checkbox from "expo-checkbox";

// create a component
const InputBox = ({ placeholder, value, setter }) => {
  const [isChecked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  if (placeholder == "checkBox") {
    return (
      //  privacy policy checkbox

      <Checkbox
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? colors.primary : undefined}
      />
    );
  }
  return (
    <View>
      {/* All the input boxes with props */}

      <TextInput
        style={styles.input}
        onChangeText={setter}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#a2a39e"}
        secureTextEntry={
          placeholder == "Password" ? !showPassword : showPassword
        }
      />

      {/* Password 'eye' icon */}

      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          setShowPassword(!showPassword);
        }}
      >
        {/* Hide | Show Password */}

        {placeholder == "Password"
          ? !showPassword
            ? svgs.Eye
            : svgs.EyeClosed
          : ""}
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 8,
    paddingLeft: 18,
    borderColor: "white",
    borderRadius: 8,
    color: "white",
    fontSize: 14,
  },
  icon: {
    position: "absolute",
    right: 12,
    top: 10,
  },
});

//make this component available to the app
export default InputBox;
