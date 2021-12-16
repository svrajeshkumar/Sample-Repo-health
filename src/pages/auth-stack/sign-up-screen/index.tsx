import {
  Box,
  Typography,
  Button,
  TextField,
  styled,
  Grid,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../navigation/routes";

const SignUpScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToInsuranceDetailsScreen = () => {
    navigate(ROUTES.INSURANCE_DETAILS_SCREEN);
  };

  const StyledMainBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: 488,
    display: "flex",
    alignItems: "center",
  }));

  return (
    <StyledMainBox>
      <Box sx={{ flex: 1, paddingLeft: "40px" }}>
        <Typography color="primary" component="h2" variant="h3">
          Get Started
          <br />
        </Typography>
        <Typography
          sx={{ paddingRight: { md: "80px" } }}
          variant="body1"
          component="p"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centurie
        </Typography>
      </Box>
      <Box sx={{ flex: 1, paddingRight: "40px" }}>
        <Grid spacing={1} sx={{ marginLeft: "-10px", width: "100%" }} container>
          <Grid item md={6}>
            <TextField
              fullWidth
              label="Legal First Name"
              variant="outlined"
              sx={{
                paddingRight: "10px",
              }}
            ></TextField>
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              label="Legal First Name"
              variant="outlined"
              sx={{
                paddingRight: "10px",
              }}
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Legal Email Address"
              variant="outlined"
              sx={{
                paddingRight: "10px",
              }}
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              sx={{
                paddingRight: "10px",
              }}
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              sx={{
                paddingRight: "10px",
              }}
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Doctor Name"
              variant="outlined"
              sx={{
                paddingRight: "10px",
              }}
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <Button
              onClick={() => navigateToInsuranceDetailsScreen()}
              sx={{
                backgroundColor: "#0074c0",
                color: "white",
                borderRadius: "20px",
                alignSelf: "center",
                marginTop: "20px",
                paddingRight: "100px",
                paddingLeft: "100px",
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </StyledMainBox>
  );
};

export default SignUpScreen;
