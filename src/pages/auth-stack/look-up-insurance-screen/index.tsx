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
import { MainInfoBox } from "../../../components/main-info-box";
import NavBar from "../../../components/navbar";
import { Strings } from "../../../constants/strings";
import ROUTES from "../../../navigation/routes";
import { StyledButton } from "./style";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const LookUpInsuranceScreen: React.FC = () => {
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

  const HealthAndSafetyIconStyled = styled(HealthAndSafetyIcon)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: 100
  }));

  return (
    <StyledMainBox>
      <MainInfoBox
        headerText={Strings.LOOK_UP_INSURNACE}
        bodyText={Strings.EDGE_COMP_PROVIDERS}
        icon={<HealthAndSafetyIconStyled/>}
      />
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
            <StyledButton
              onClick={() => {
                navigateToUploadPrescriptionScreen();
              }}
            >
              Next
            </StyledButton>
          </Grid>
        </Grid>
      </Box>
    </StyledMainBox>
  );
};

export default LookUpInsuranceScreen;
