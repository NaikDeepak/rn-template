import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";

import * as Yup from "yup";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import appStyle from "../config/appStyle";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    // const result = await authApi.login({ email, password });
    // result
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //   })
    //   .catch((error) => {
    //     const { errorCode, errorMessage } = error;
    //     setLoginFailed(true);
    //   });
    console.log("handle submit");
  };
  return (
    <Screen style={styles.container}>
      <Image style={appStyle.logo} source={require("../assets/logo-red.png")} />
      <View style={styles.formContainer}>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={"Invalid email or password"}
            visible={loginFailed}
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
            textContentType="password"
            rounded
            password
            viewPass
          />
          <SubmitButton
            title="Login"
            style={appStyle.button}
            color={colors.primary}
            textStyle={appStyle.buttonText}
          />
        </Form>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  formContainer: {
    width: "100%",
    paddingBottom: 30,
    alignItems: "center",
  },
});

export default LoginScreen;
