import React from "react";
import { useFormikContext } from "formik";

import { Button, Text } from "galio-framework";

function SubmitButton({ title, style, color, textStyle }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onPress={handleSubmit} round shadowless style={style} color={color}>
      <Text style={textStyle}>{title}</Text>
    </Button>
  );
}

export default SubmitButton;
