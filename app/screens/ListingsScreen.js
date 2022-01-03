import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import { Text, Button } from "galio-framework";
import Card from "../components/Card";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingsScreen({ navigation }) {
  const listings = [
    {
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
    {
      id: 3,
      title: "Gray couch in a great condition",
      images: [{ fileName: "couch2" }],
      categoryId: 1,
      price: 1200,
      userId: 2,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 1,
      title: "Room & Board couch (great condition) - delivery included",
      description:
        "I'm selling my furniture at a discount price. Pick up at Venice. DM me asap.",
      images: [
        { fileName: "couch1" },
        { fileName: "couch2" },
        { fileName: "couch3" },
      ],
      price: 1000,
      categoryId: 1,
      userId: 1,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 2,
      title: "Designer wear shoes",
      images: [{ fileName: "shoes1" }],
      categoryId: 5,
      price: 100,
      userId: 2,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 102,
      title: "Canon 400D (Great Condition)",
      images: [{ fileName: "camera1" }],
      price: 300,
      categoryId: 3,
      userId: 1,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 101,
      title: "Nikon D850 for sale",
      images: [{ fileName: "camera2" }],
      price: 350,
      categoryId: 3,
      userId: 1,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 4,
      title: "Sectional couch - Delivery available",
      description: "No rips no stains no odors",
      images: [{ fileName: "couch3" }],
      categoryId: 1,
      price: 950,
      userId: 2,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      id: 6,
      title: "Brown leather shoes",
      images: [{ fileName: "shoes2" }],
      categoryId: 5,
      price: 50,
      userId: 2,
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
  ];
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <Text>Couldn't retrieve listings from server.</Text>
          <Button title={"Retry"} />
        </>
      )}
      {loading ? (
        <ActivityIndicator visible={loading} />
      ) : (
        <View style={styles.ListingsSection}>
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                key={item.title}
                title={item.title}
                subTitle={"$" + item.price}
                imageUrl={item.images[0].url}
                thumbnailUrl={item.images[0].thumbnailUrl}
                onPress={() => navigation.navigate("ListingDetails", item)}
              />
            )}
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    backgroundColor: colors.light,
    alignItems: "center",
  },
  ListingsSection: {
    padding: 10,
  },
});

export default ListingsScreen;
