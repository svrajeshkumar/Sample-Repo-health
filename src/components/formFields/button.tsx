import React, { FC } from "react";
import { Button, styled } from "@mui/material";

type Variant = "contained" | "outlined";

export interface formActionButtonProps {
  id: string;
  children: React.ReactNode;
  variant: Variant;
  [x: string]: any;
}

const FormActionButton: FC<formActionButtonProps> = (
  props: formActionButtonProps
) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    height: "40px !important",
    borderRadius: "7px",
    width: 150,
    backgroundColor: theme.palette.secondary.main,
  }));

  return <StyledButton {...props}></StyledButton>;
};

export default FormActionButton;
