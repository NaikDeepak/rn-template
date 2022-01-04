import React from "react";
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import { Text } from "galio-framework";

function ListingDetailsScreen({ route }) {
  const item = route.params;
  //TODO:remove below line
  //const { item } = route;
  const { url } = item.images[0];
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={require("../assets/background.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/person.jpeg")}
            title="Dylan"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  detailsContainer: {
    padding: 15,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
