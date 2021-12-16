import {
  Box,
  Typography,
  Button,
  styled,
  TextField,
  Grid,
} from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets/images";
import NavBar from "../../../components/navbar";
import ROUTES from "../../../navigation/routes";

const InsuranceDetailsScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToUploadPrescriptionScreen = () => {
    navigate(ROUTES.UPLOAD_PRESCRIPTION_SCREEN);
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
              label="Insurance ID Number"
              type="email"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              label="Rx Bin"
              variant="outlined"
              sx={{
                paddingRight: "10px",
              }}
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Rx Group"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Rx PCN"
              type="email"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Insurance Phone Number"
              type="text"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
            ></TextField>
          </Grid>

          <Grid item md={12}>
            <Button
              onClick={() => {
                navigateToUploadPrescriptionScreen();
              }}
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

export default InsuranceDetailsScreen;
