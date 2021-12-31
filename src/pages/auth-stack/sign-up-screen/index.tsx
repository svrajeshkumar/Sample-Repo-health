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
import { MainInfoBox } from "../../../components/main-info-box";
import { Strings } from "../../../constants/strings";
import StartIcon from '@mui/icons-material/Start';
import ROUTES from "../../../navigation/routes";

const SignUpScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToShippingAddressScreen = () => {
    navigate(ROUTES.SHIPPING_ADD_SCREEN);
  };

  const StyledMainBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: 488,
    display: "flex",
    alignItems: "center",
  }));

  const StyledButton = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    borderRadius: "20px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "20px",
    paddingTop: "15px",
    paddingBottom: "15px"
  }));

  const StartIconStyled = styled(StartIcon)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: 100
  }));

  return (
    <StyledMainBox>
      <MainInfoBox
        headerText={Strings.GET_STARTED}
        bodyText={Strings.GET_STARTED_PHARMACY}
        icon={<StartIconStyled/>}
      />
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
              placeholder="(555) 555-555"
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
            <StyledButton onClick={() => navigateToShippingAddressScreen()}>
              Next
            </StyledButton>
          </Grid>
        </Grid>
      </Box>
    </StyledMainBox>
  );
};

export default SignUpScreen;
