import React from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import FormActionButton from "../../../../components/formFields/button";

interface insuranceFormProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const OnboardInsurance: React.FC<insuranceFormProps> = ({ onClick }) => {
  const StyledInsuranceWrapper = styled(Box)(({ theme }) => ({
    paddingTop: 20,
  }));

  const StyledInfoLabel = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 600,
    color: theme.palette.secondary.main,
  }));

  const StyledLinkButton = styled(Button)(({ theme }) => ({
    height: "40px !important",
    borderRadius: "7px",
    width: 200,
    backgroundColor: theme.palette.secondary.main,
  }));

  return (
    <StyledInsuranceWrapper>
      <StyledInfoLabel>
        Edgepark is compatible with most major plans, including most forms of
        Medicare Part D.
      </StyledInfoLabel>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
          justifyContent: { xs: "center" },
        }}
      >
        <StyledLinkButton
          disableElevation
          id="button-submit"
          size="small"
          variant="contained"
          color="primary"
          onClick={onClick}
        >
          Look up my insurance
        </StyledLinkButton>
      </Box>
    </StyledInsuranceWrapper>
  );
};

export default OnboardInsurance;
