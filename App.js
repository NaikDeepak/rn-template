import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
// import AppTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
// import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
// import authStorage from "./app/auth/storage";
// import logger from "./app/utility/logger";
import Firebase from "./app/config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// logger.start();
const fb = Firebase;

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setIsReady(true);
        console.log("user logged out ");
      }
    });

    return () => unsubscribe();
  }, []);

  // if (!isReady) {
  //   return (
  //     <AppLoading onFinish={() => setIsReady(true)} onError={console.warn} />
  //   );
  // }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* <OfflineNotice /> */}
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
