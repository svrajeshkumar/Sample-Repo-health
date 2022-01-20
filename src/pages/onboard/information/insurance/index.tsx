import React, { useState } from "react";
import { Box, styled, Typography, Button } from "@mui/material";
import FormActionButton from "../../../../components/formFields/button";

interface insuranceFormProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const OnboardInsurance: React.FC<insuranceFormProps> = ({ onClick }) => {
  const [isLookupInsurance, setIsLookupInsurance] = useState(null);
  const StyledInsuranceWrapper = styled(Box)(({ theme }) => ({
    paddingTop: 20,
    [theme.breakpoints.up("sm")]: {
      width: `500px !important`,
    },
  }));

  const StyledInfoLabel = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 600,
    color: theme.palette.primary.main,
  }));

  const StyledLinkButton = styled(Button)(({ theme }) => ({
    height: "40px !important",
    borderRadius: "7px",
    width: 200,
    backgroundColor: theme.palette.primary.main,
  }));

  const StyledLinkLabel = styled(Typography)(({ theme }) => ({
    height: "40px !important",
    borderRadius: "7px",
    width: 200,
    textAlign: "center",
    fontSize: "12px",
    color: theme.palette.primary.main,
    fontWeight: 600,
    textDecoration: "underline",
  }));

  return (
    <StyledInsuranceWrapper>
      {isLookupInsurance ? (
        <StyledInfoLabel>
          Edgepark is compatible with most major plans, including most forms of
          Medicare Part D.
        </StyledInfoLabel>
      ) : (
        <StyledInfoLabel>
          We found your primary insurance and it is compatible with edgepark.
          You’ll only pay your standard copays for our service and the cost of
          any vitamins and over-the-counter (OTC) medications.
        </StyledInfoLabel>
      )}

      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
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

        <StyledLinkLabel>
          No, I will add my insurance card myself
        </StyledLinkLabel>
      </Box>
    </StyledInsuranceWrapper>
  );
};

export default OnboardInsurance;
