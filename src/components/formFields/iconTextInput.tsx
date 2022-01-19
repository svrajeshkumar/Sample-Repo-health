import React, { FC, ReactNode } from "react";
import { OutlinedInput, styled, FormControl, InputLabel } from "@mui/material";

type varient = "filled" | "outlined" | "standard";
type size = "medium" | "small";
interface formTextInputProps {
  id?: string;
  fullWidth?: boolean;
  varient?: varient;
  label?: string;
  size?: size;
  autoComplete?: string;
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  type?: string;
  value?: string;
  placeholder?: string;
}

const FormIconTextInput: FC<formTextInputProps> = ({
  id,
  fullWidth,
  varient,
  label,
  size,
  autoComplete,
  endAdornment,
  type,
  value,
  startAdornment,
  placeholder,
}) => {
  const StyledIconTextField = styled(FormControl)(({}) => ({
    width: "100% !important",
    height: "100% !important",
  }));

  return (
    <StyledIconTextField size={size} variant={varient}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        type={type}
        placeholder={placeholder}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
        autoComplete={autoComplete}
        label={label}
        fullWidth={fullWidth}
        id={id}
        value={value}
      />
    </StyledIconTextField>
  );
};
export default FormIconTextInput;
