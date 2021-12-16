import React from "react";
import { Box, styled, Typography } from "@mui/material";

const FooterComponent: React.FC = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    minHeight: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121",
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
  }));

  return (
    <StyledBox>
      <StyledTypography variant="body2">
        Copyright ©{new Date().getFullYear()} Digital Pharmacy
      </StyledTypography>
    </StyledBox>
  );
};

export default FooterComponent;
