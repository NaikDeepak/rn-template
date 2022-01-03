import React from "react";
import { ImageBackground, StyleSheet, View, Image } from "react-native";

import { Button, Text } from "galio-framework";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Just another Tagline</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          round
          uppercase
          shadowless
          color={colors.primary}
          style={styles.button}
          onPress={() => console.log("Login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <Button
          round
          uppercase
          color={colors.secondary}
          shadowless
          style={styles.button}
          onPress={() => console.log("Register")}
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
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
