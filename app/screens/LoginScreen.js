import React, { useState, useRef } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Alert } from "react-native";

import * as Yup from "yup";
import authApi from "../api/auth";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";
import appStyle from "../config/appStyle";
import { Text } from "galio-framework";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);

  const formRef = useRef();
  const handleSubmit = async ({ email, password }) => {
    await authApi
      .login({ email, password })
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const { errorCode, errorMessage } = error;
        setLoginFailed(true);
      });
  };

  const handleForgotPassword = async () => {
    const { setFieldTouched, values } = formRef.current;
    setFieldTouched("email");
    await authApi
      .forgotPassword(values.email)
      .then(() => {
        Alert.alert("Password reset email sent");
      })
      .catch((error) => {
        const { errorCode, errorMessage } = error;
        Alert.alert("Unable to send reset password email");
      });
  };

  return (
    <Screen style={styles.container}>
      <Image style={appStyle.logo} source={require("../assets/hoot.png")} />
      <View style={styles.formContainer}>
        <Form
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
          formRef={formRef}
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
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
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
  forgotPassword: {
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;
