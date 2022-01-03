import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
// import AppTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
// import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
// import authStorage from "./app/auth/storage";
// import logger from "./app/utility/logger";
import Firebase from "./app/config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { View } from "react-native";
// logger.start();
const fb = Firebase;

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        SplashScreen.hideAsync();
      } else {
        SplashScreen.hideAsync();
        setIsReady(true);
        console.log("user logged out ");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* <OfflineNotice /> */}
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
