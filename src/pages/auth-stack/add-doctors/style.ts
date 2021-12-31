import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    borderRadius: "20px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
    width: '100%',
    ":hover": {
        backgroundColor: theme.palette.primary.main
    }
  }));