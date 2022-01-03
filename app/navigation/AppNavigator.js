import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
// import useNotifications from "../hooks/useNotifications";
//import * as Notifications from "expo-notifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  console.log("APP NAVIGATOR");
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={FeedNavigator}
        name="Feed"
        options={{
          title: "Feed",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        component={AccountNavigator}
        name={routes.LISTING_EDIT}
        options={({ navigation }) => ({
          title: "Add",
          headerShown: false,
          tabBarButton: () => (
            <NewListingButton
              onPress={() =>
                console.log("you can add navigation.navigate('route') here")
              }
            />
          ),
        })}
      />
      <Tab.Screen
        component={AccountNavigator}
        name={routes.ACCOUNT_NAVIGATOR}
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
