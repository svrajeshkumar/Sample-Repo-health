import React, { FC, HTMLInputTypeAttribute } from "react";
import { TextField, styled } from "@mui/material";

type varient = "filled" | "outlined" | "standard";
type size = "medium" | "small";
interface formTextInputProps {
  id?: string;
  fullWidth?: boolean;
  varient?: varient;
  label?: string;
  size?: size;
  autoComplete?: string;
  type?: HTMLInputTypeAttribute;
}

const FormTextInput: FC<formTextInputProps> = ({
  id,
  fullWidth,
  varient,
  label,
  size,
  autoComplete,
  type,
}) => {
  const StyledTextField = styled(TextField)(({}) => ({
    width: "100% !important",
    height: "100% !important",
    fontSize: "14px !important",
  }));

  return (
    <StyledTextField
      type={type}
      autoComplete={autoComplete}
      size={size}
      variant={varient}
      label={label}
      fullWidth={fullWidth}
      id={id}
    />
  );
};
export default FormTextInput;
