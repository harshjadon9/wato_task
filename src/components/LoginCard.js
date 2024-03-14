//import liraries
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import InputBox from "../components/InputBox";
import StartButton from "../components/Button";
import { colors, showToast, svgs, variables } from "../base";

// create a component
const LoginCard = ({ type }) => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form details validator (NOT NULL)
  function validator() {
    var flag = 0;
    if (type == "login") {
      if (password.length != 0 && email.length != 0) {
        showToast("Loggedin Successfully ✅");
        flag = 0;
      } else {
        flag = 1;
      }
    } else {
      if (name.length != 0 && password.length != 0 && email.length != 0) {
        showToast("Account created Successfully ✅");
        flag = 0;
      } else {
        flag = 1;
      }
    }
    if (flag == 1) {
      showToast("Please fill out all fields ⚠️");
    } else {
      navigation.navigate("Home");
    }
  }

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>
        Please {type == "login" ? "sign-in" : "sign-up"} to your account
      </Text>

      {/* Login | Signup Background gradient  */}

      <LinearGradient
        colors={["#686b5f", "#272929"]}
        start={{ x: 1.0, y: 0.0 }}
        end={{ x: 0.0, y: 0.5 }}
        style={styles.card}
      >
        {type == "login" ? (
          ""
        ) : (
          <>
            {/* 'Name' input if sign up page */}
            <InputBox placeholder={"Name"} value={name} setter={setName} />
            <View style={{ height: 18 }}></View>
          </>
        )}

        {/* else input only email, password */}

        <InputBox placeholder={"Email"} value={email} setter={setEmail} />
        <View style={{ height: 18 }}></View>
        <InputBox
          placeholder={"Password"}
          value={password}
          setter={setPassword}
        />

        {/* Password reset option | privacy policy option */}

        <View style={{ marginTop: 20, marginBottom: 40 }}>
          {type == "login" ? (
            <>
              <TouchableOpacity
                activeOpacity={variables.activeOpacity}
                onPress={() => showToast("Reset email sent successfully ✉️")}
              >
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View
              style={{ flexDirection: "row", opacity: variables.baseOpactity }}
            >
              <InputBox placeholder={"checkBox"} />
              <Text style={{ color: "white", marginLeft: 10 }}>
                I agree to{" "}
              </Text>
              <TouchableOpacity
                activeOpacity={variables.activeOpacity}
                onPress={() => navigation.navigate("Policy")}
              >
                <Text style={{ color: colors.primary }}>
                  privacy policy & terms
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Submit Button */}

        <View style={styles.buttonView}>
          <StartButton
            title={type == "login" ? "Login" : "Sign up"}
            type={"filled"}
            onClick={() => {
              validator();
            }}
          />
        </View>

        {/* Text lower to submit Button */}

        <View style={styles.lowerText}>
          <Text style={{ color: "white", fontSize: 13 }}>
            {type == "login"
              ? "New to our platform?"
              : "Already have an account?"}
          </Text>
          <TouchableOpacity
            activeOpacity={variables.activeOpacity}
            onPress={() => {
              if (type == "login") {
                navigation.navigate("Signup");
              } else {
                navigation.navigate("Login");
              }
            }}
          >
            <Text style={{ color: colors.primary, fontSize: 13 }}>
              {type == "login" ? " Create an account" : " Sign in instead"}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.or}>or</Text>

        {/* Google Signin Button */}

        <StartButton
          type={"bordered"}
          icon={svgs.Google}
          title={"Continue with Google"}
          onClick={() => showToast("Login with google initiated ✅")}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  main: {
    padding: 12,
    marginTop: 100,
  },
  title: {
    // fontFamily: "Lora",
    color: "white",
    marginBottom: 40,
    fontSize: 16,
  },
  card: {
    padding: 15,
    paddingVertical: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
  forgotPassword: {
    color: colors.primary,
    opacity: variables.baseOpactity,
    textAlign: "right",
    fontSize: 12,
  },
  buttonView: {},
  lowerText: {
    flexDirection: "row",
    opacity: variables.baseOpactity,
    justifyContent: "center",
    marginTop: 15,
  },
  or: {
    opacity: variables.baseOpactity,
    color: "white",
    marginVertical: 30,
    textAlign: "center",
  },
});

//make this component available to the app
export default LoginCard;
