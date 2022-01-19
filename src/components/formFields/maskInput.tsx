import * as React from "react";
import MaskedInput from "react-text-mask";

import { TextField, styled } from "@mui/material";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const maskPattren = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const InputMasked = React.forwardRef<HTMLElement, CustomProps>(
  function InputMasked(props, ref) {
    const { onChange, ...other } = props;
    return <MaskedInput {...other} mask={maskPattren} />;
  }
);

export const FormMaskInput = () => {
  const [values, setValues] = React.useState({
    textmask: "(100) 000-0000",
  });

  const StyledFormMaskInput = styled(TextField)(({}) => ({
    width: "100% !important",
    height: "100% !important",
    fontSize: "14px !important",
  }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <StyledFormMaskInput
      label="Phone Number"
      size="small"
      name="numberformat"
      id="formatted-numberformat-input"
      value={values.textmask}
      onChange={handleChange}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        inputComponent: InputMasked as any,
      }}
      variant="outlined"
    />
  );
};
export default FormMaskInput;
