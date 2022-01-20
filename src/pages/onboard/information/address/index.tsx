import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import FormTextInput from "../../../../components/formFields/textInput";
import FormActionButton from "../../../../components/formFields/button";
import { StyledShippingAddressWrapper } from "./styled";

interface shippingAddressFormProps {
  onClick: (data: any) => any;
}

const ShippingAddressForm: React.FC<shippingAddressFormProps> = ({
  onClick,
}) => {
  const [street1, setStreet1] = useState();
  const [street2, setStreet2] = useState();
  const [zipCode, setZipCode] = useState();
  const [cityName, setCityName] = useState();
  const [state, setState] = useState();

  return (
    <StyledShippingAddressWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextInput
            fullWidth={true}
            size="small"
            value={street1}
            onChange={(e) => {
              setStreet1(e.target.value);
            }}
            varient="outlined"
            id="input-street-address"
            label="Street Address 1"
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            fullWidth={true}
            size="small"
            value={street2}
            onChange={(e) => {
              setStreet2(e.target.value);
            }}
            varient="outlined"
            id="input-street-address-2"
            label="Street Address 2"
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            fullWidth={true}
            size="small"
            value={zipCode}
            onChange={(e) => {
              setZipCode(e.target.value);
            }}
            varient="outlined"
            id="input-zip-code"
            label="ZIP Code"
          />
        </Grid>
        <Grid item xs={8}>
          <FormTextInput
            fullWidth={true}
            size="small"
            varient="outlined"
            value={cityName}
            onChange={(e) => {
              setCityName(e.target.value);
            }}
            id="input-city-name"
            label="City Name"
          />
        </Grid>
        <Grid item xs={4}>
          <FormTextInput
            fullWidth={true}
            size="small"
            varient="outlined"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
            id="input-state"
            label="State"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              marginBottom: "20px",
              justifyContent: { xs: "center" },
            }}
          >
            <FormActionButton
              disableElevation
              id="button-continue"
              size="small"
              variant="contained"
              color="secondary"
              onClick={() => {
                onClick({
                  street1: street1,
                  street2: street2,
                  zipCode: zipCode,
                  cityName: cityName,
                  state: state,
                });
              }}
            >
              Continue
            </FormActionButton>
          </Box>
        </Grid>
      </Grid>
    </StyledShippingAddressWrapper>
  );
};

export default ShippingAddressForm;
