import {
  Box,
  Typography,
  Button,
  TextField,
  styled,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainInfoBox } from "../../../components/main-info-box";
import { Strings } from "../../../constants/strings";
import StartIcon from "@mui/icons-material/Start";
import ROUTES from "../../../navigation/routes";
import LabelTextField from "../../../components/text-field";
import { KEYS } from "../../../constants/keys";

const SignUpScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToShippingAddressScreen = () => {
    navigate(ROUTES.SHIPPING_ADD_SCREEN);
  };

  const [dropdownValue, setDropdownValue] = useState("");

  const StyledMainBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: 488,
    display: "flex",
    justifyContent: "center",
    alignItems: 'flex-start',
    paddingLeft: "80px",
    paddingRight: "80px",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      paddingRight: "20px",
      paddingLeft: "20px"
    },
  }));

  const StyledButton = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
    paddingTop: "15px",
    paddingBottom: "15px",
    marginBottom: "10px",
  }));

  const StartIconStyled = styled(StartIcon)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: 100,
  }));

  const StyledFormBox = styled(Box)(({ theme }) => ({
    flex: 1,
    paddingRight: "40px",
    paddingTop: "35px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "50px",
      justifyContent: "center"
    },
  }));

  return (
    <StyledMainBox>
      <MainInfoBox
        headerText={Strings.GET_STARTED}
        bodyText={Strings.GET_STARTED_PHARMACY}
        icon={<StartIconStyled />}
        isSignUpScreen={true}
      />
      <StyledFormBox sx={{ flex: 1, paddingRight: "40px", paddingTop: "35px" }}>
        <Grid spacing={1} sx={{ marginLeft: "-10px", width: "100%" }} container>
          <Grid item md={6}>
            <LabelTextField label={Strings.LEGAL_FIRST_NAME} placeholder="" />
          </Grid>
          <Grid item md={6}>
            <LabelTextField label={Strings.LEGAL_LAST_NAME} placeholder="" />
          </Grid>
          <Grid item md={12}>
            <LabelTextField label={Strings.EMAIL_ADDRESS} placeholder="" />
          </Grid>
          <Grid item md={12}>
            <LabelTextField label={Strings.PASSWORD} placeholder="" />
          </Grid>
          <Grid item md={12}>
            <LabelTextField
              label={"Phone number"}
              placeholder="(555)-555-555"
            />
          </Grid>
          <Grid item md={12}>
            <LabelTextField label="Doctor Name" placeholder="" />
          </Grid>
          <Grid item md={12}>
            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Typography
                sx={{
                  marginBottom: "2px",
                }}
              >
                {Strings.HOW_DID_YOU_HEAR_EDGEPARK}
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dropdownValue}
                placeholder="Select One..."
                onChange={(e) => {
                  setDropdownValue(e.target.value);
                }}
              >
                <MenuItem value={"Friends"}>
                  {"Through friends & family"}
                </MenuItem>
                <MenuItem value={"social"}>{"Social Media"}</MenuItem>
                <MenuItem value={"news"}>
                  {"Through news or news paper"}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={9}>
            <StyledFormBox style={{ marginTop: "5px" }} />
            <ReCAPTCHA
              sitekey={KEYS.RECAPTCHA_SITE_KEY_TEST}
              onChange={(val) => console.log(val)}
            />
          </Grid>
          <Grid item md={6} style={{ justifyContent: "flex-end" }}>
            <StyledButton onClick={() => navigateToShippingAddressScreen()}>
              Next
            </StyledButton>
          </Grid>
        </Grid>
      </StyledFormBox>
    </StyledMainBox>
  );
};

export default SignUpScreen;
