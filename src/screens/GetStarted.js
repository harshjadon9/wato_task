import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StartButton from "../components/Button";
import { colors, images, svgs, variables } from "../base";

const GetStarted = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <Image source={images.Sparkles} />
      <Image source={images.Rays} style={styles.rays} />
      <View style={styles.subHead}>
        {svgs.Logo}
        <Text style={styles.text}>
          Zero Cost {"\n"}WhatsApp Messaging {"\n"}platform
        </Text>
        <View style={{ width: "100%" }}>
          <View>
            <StartButton
              type={"main"}
              title={"Get Started"}
              onClick={() => {
                navigation.navigate("Signup");
              }}
            />
          </View>
        </View>
        <View style={styles.lowerText}>
          <Text style={{ color: "white" }}>Already have an account? </Text>
          <TouchableOpacity
            activeOpacity={variables.activeOpacity}
            onPress={() => {
              // Routing to login screen
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: colors.primary }}>Sign in instead</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  subHead: {
    width: "100%",
    marginTop: "auto",
  },
  text: {
    fontSize: 28,
    color: "white",
    fontFamily: "Lora",
    marginTop: 30,
    marginBottom: 90,
  },
  lowerText: {
    opacity: 0.6,
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 150,
  },
  rays: {
    position: "absolute",
  },
});

export default GetStarted;
