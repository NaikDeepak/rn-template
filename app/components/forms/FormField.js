import React from "react";
import { useFormikContext } from "formik";

import { Input } from "galio-framework";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();

  return (
    <>
      <Input
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
