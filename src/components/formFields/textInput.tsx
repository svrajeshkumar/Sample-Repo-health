import React from "react";
import { styled, TextField as MuiTextField } from "@mui/material";
type varient = "filled" | "outlined" | "standard";

export interface TextFieldPropTypes {
  id?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  varient?: varient;
  [x: string]: any;
}

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  width: "100% !important",
  height: "100% !important",
  fontSize: "14px !important",
}));

const TextField: React.FC<TextFieldPropTypes> = (props: TextFieldPropTypes) => {
  return <StyledTextField variant="outlined" {...props}></StyledTextField>;
};

export default TextField;
