import { Constants } from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.1.15:9000/api",
    firebase: {
      test: "test",
      apiKey: "AIzaSyB_mf6_psZLGFUSpy5ZJGm3R9_F8D71c48",
      authDomain: "template-36965.firebaseapp.com",
      projectId: "template-36965",
      storageBucket: "template-36965.appspot.com",
      messagingSenderId: "1023209363786",
      appId: "1:1023209363786:web:5c7f1a8566c6b1f0ce89b3",
    },
  },
  staging: {
    apiUrl: "http://192.168.1.15:9000/api",
    firebase: {
      test: "test",
      apiKey: "AIzaSyB_mf6_psZLGFUSpy5ZJGm3R9_F8D71c48",
      authDomain: "template-36965.firebaseapp.com",
      projectId: "template-36965",
      storageBucket: "template-36965.appspot.com",
      messagingSenderId: "1023209363786",
      appId: "1:1023209363786:web:5c7f1a8566c6b1f0ce89b3",
    },
  },
  prod: {
    apiUrl: "http://192.168.1.15:9000/api",
    firebase: {
      test: "test",
      apiKey: "AIzaSyB_mf6_psZLGFUSpy5ZJGm3R9_F8D71c48",
      authDomain: "template-36965.firebaseapp.com",
      projectId: "template-36965",
      storageBucket: "template-36965.appspot.com",
      messagingSenderId: "1023209363786",
      appId: "1:1023209363786:web:5c7f1a8566c6b1f0ce89b3",
    },
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
