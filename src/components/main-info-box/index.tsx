import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledMainBox } from "./style";

interface MainInfoBox {
  headerText: string;
  bodyText: string;
  icon: JSX.Element
}

export const MainInfoBox: React.FC<MainInfoBox> = ({
  headerText,
  bodyText,
  icon
}) => {
  return (
    <StyledMainBox>
      {icon}
      <Typography color="primary" component="h2" variant="h3">
        {headerText}
        <br />
      </Typography>
      <Typography
        sx={{ paddingRight: { md: "80px" } }}
        variant="body1"
        component="p"
      >
       {bodyText}
      </Typography>
    </StyledMainBox>
  );
};
