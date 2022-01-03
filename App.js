import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ListingDetailsScreen
        route={{
          item: {
            id: 201,
            title: "Red jacket",
            images: [{ fileName: "jacket1" }],
            price: 100,
            categoryId: 5,
            userId: 1,
            location: {
              latitude: 37.78825,
              longitude: -122.4324,
            },
          },
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
