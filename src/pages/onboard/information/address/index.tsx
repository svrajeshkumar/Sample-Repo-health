import React from "react";
import { Box, Grid } from "@mui/material";
import FormTextInput from "../../../../components/formFields/textInput";
import FormActionButton from "../../../../components/formFields/button";
import { StyledShippingAddressWrapper } from "./styled";

interface shippingAddressFormProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const ShippingAddressForm: React.FC<shippingAddressFormProps> = ({
  onClick,
}) => {
  return (
    <StyledShippingAddressWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextInput
            fullWidth={true}
            size="small"
            varient="outlined"
            id="input-street-address"
            label="Street Address 1"
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            fullWidth={true}
            size="small"
            varient="outlined"
            id="input-street-address-2"
            label="Street Address 2"
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextInput
            fullWidth={true}
            size="small"
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
            id="input-city-name"
            label="City Name"
          />
        </Grid>
        <Grid item xs={4}>
          <FormTextInput
            fullWidth={true}
            size="small"
            varient="outlined"
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
              onClick={onClick}
            >
              continue
            </FormActionButton>
          </Box>
        </Grid>
      </Grid>
    </StyledShippingAddressWrapper>
  );
};

export default ShippingAddressForm;
