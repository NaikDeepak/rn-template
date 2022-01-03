import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../components/forms";
// import ActivityIndicator from "../components/ActivityIndicator";
import authApi from "../api/auth";
// import useAuth from "../auth/useAuth";
// import useApi from "../hooks/useApi";
// import logger from "../utility/logger";
import appStyle from "../config/appStyle";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

function RegisterScreen() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (userInfo) => {
    setLoading(true);
    const result = await authApi.register(userInfo);
    result
      .then((userCredential) => {
        setLoading(false);
        const user = userCredential.user;
      })
      .catch((error) => {
        const { errorCode, errorMessage } = error;
        setLoading(false);
        setErrorMessage(errorMessage);
      });
    setErrorMessage("");
  };
  return (
    <>
      <ActivityIndicator visible={loading} />

      <Screen style={styles.container}>
        <Image
          style={appStyle.logo}
          source={require("../assets/logo-red.png")}
        />
        <ErrorMessage error={errorMessage} visible={!!errorMessage} />
        <View style={styles.formContainer}>
          <Form
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={(values) => handleRegister(values)}
            validationSchema={validationSchema}
          >
            <FormField
              autoCorrect={false}
              icon="user"
              family={appStyle.iconFamily}
              name="name"
              placeholder="Name"
              rounded
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="mail"
              family={appStyle.iconFamily}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
              rounded
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              family={appStyle.iconFamily}
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              rounded
              password
              viewPass
            />
            <SubmitButton
              title="Register"
              style={appStyle.button}
              color={colors.primary}
              textStyle={appStyle.buttonText}
            />
          </Form>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  formContainer: {
    width: "100%",
    marginVertical: 100,
    alignItems: "center",
  },
});

export default RegisterScreen;
