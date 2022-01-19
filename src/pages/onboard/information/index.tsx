import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepButton,
  Typography,
  StepLabel,
  StepContent,
} from "@mui/material";
import { StyledInformationWrapper } from "./styled";
import SeactionH3 from "../../../components/Typography/section-h3";
import SeactionBody1 from "../../../components/Typography/section-body1";
import SeactionH6 from "../../../components/Typography/section-h6";
import ShippingAddressForm from "./address";
import ProfileInfoForm from "./profile";
import OnboardDoctorsInfo from "./doctors";
import FormActionButton from "../../../components/formFields/button";
import OnboardInsurance from "./insurance";

const steps = ["Your address", "About you", "Your doctors", "Your insurance"];
const stpesInfo = [
  {
    title: "Your shipping address",
    content: `We ship your medications right to your door. Where would you like to receive your first shipment?`,
  },
  {
    title: "About You",
    content: `As your new pharmacy, we need to know more about you and your health. We only use this information to provide you with the best service possible, and never share it with anyone else.`,
  },
  {
    title: "Add your Doctors",
    content: `We reach out to your doctors to gather your prescription information. We also work with them to handle refills and any changes to your medication.`,
  },
  {
    title: "Look up your Insurance",
    content: `Edgepark is compatible with most major plans, including most forms of Medicare Part D.`,
  },
];

const OnboardInformation = () => {
  const [activeStep, setActiveStep] = React.useState(-1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <StyledInformationWrapper>
      <SeactionH3
        title={activeStep !== -1 ? stpesInfo[activeStep].title : "Hi, Erik!"}
      />
      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <SeactionBody1
          title={
            activeStep !== -1
              ? stpesInfo[activeStep].content
              : `First we’ll need to know a little more about you. The following sections help us determine if you’re eligible for edgepark.`
          }
        />
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          marginBottom: { xs: "20px" },
        }}
      >
        <SeactionH6 title="Setting up your account" />
      </Box>
      <Stepper orientation="vertical" activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {activeStep === 0 && <ShippingAddressForm onClick={handleNext} />}
              {activeStep === 1 && <ProfileInfoForm onClick={handleNext} />}
              {activeStep === 2 && <OnboardDoctorsInfo onClick={handleNext} />}
              {activeStep === 3 && (
                <OnboardInsurance
                  onClick={() => {
                    setActiveStep(-1);
                  }}
                />
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
          justifyContent: { xs: "center" },
        }}
      >
        {activeStep === -1 && (
          <FormActionButton
            disableElevation
            id="button-submit"
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => {
              setActiveStep(0);
            }}
          >
            Continue
          </FormActionButton>
        )}
      </Box>
    </StyledInformationWrapper>
  );
};

export default OnboardInformation;
