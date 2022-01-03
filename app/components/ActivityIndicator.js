import LottieView from "lottie-react-native";
import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    backgroundColor: colors.white,
    opacity: 0.7,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});
