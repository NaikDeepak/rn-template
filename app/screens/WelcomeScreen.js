import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import { Button, Text } from "galio-framework";
import colors from "../config/colors";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function WelcomeScreen({ navigation }) {
  console.log("welcome");
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/birdie.png")} />
        <Text style={styles.tagline}>Communicate with Passion</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          round
          uppercase
          shadowless
          color={colors.primary}
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button
          round
          uppercase
          color={colors.secondary}
          shadowless
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>Register</Text>
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 10,
    paddingBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 30,
    fontWeight: "600",
    paddingVertical: 20,
    color: colors.white,
  },
});

export default WelcomeScreen;
