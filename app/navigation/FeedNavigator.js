import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetails from "../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ presentation: "modal", headerShown: false }}
  >
    <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
    <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetails} />
  </Stack.Navigator>
);

export default FeedNavigator;
