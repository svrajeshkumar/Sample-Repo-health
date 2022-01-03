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
import ROUTES from "../../../navigation/routes";
import { StyledButton } from "./style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Strings } from "../../../constants/strings";

const AboutYouScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToAddYourDoctorsScreen = () => {
    navigate(ROUTES.ADD_YOUR_DOCTORS);
  };

  const StyledMainBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: 488,
    display: "flex",
    alignItems: "center",
  }));

  const AccountCircleIconStyled = styled(AccountCircleIcon)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: 100,
  }));

  return (
    <StyledMainBox>
      <MainInfoBox
        headerText={Strings.ABOUT_YOU}
        bodyText={Strings.MORE_INFO_ABOUT_YOU}
        icon={<AccountCircleIconStyled />}
      />
      <Box sx={{ flex: 1, paddingRight: "40px" }}>
        <Grid spacing={1} sx={{ marginLeft: "-10px", width: "100%" }} container>
          <Grid item md={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            ></TextField>
          </Grid>

          <Grid item md={12}>
            <TextField
              fullWidth
              label="Last 4 Digits of SSN"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Add allergies"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Add Health conditions"
              type="text"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
            ></TextField>
          </Grid>

          <Grid item md={12}>
            <StyledButton
              onClick={() => {
                navigateToAddYourDoctorsScreen();
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

export default AboutYouScreen;
