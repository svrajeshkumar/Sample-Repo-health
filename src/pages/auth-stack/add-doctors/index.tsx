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
  import HealingIcon from '@mui/icons-material/Healing';import { Strings } from "../../../constants/strings";
  
  const AddYourDoctorsScreen: React.FC = () => {
    const navigate = useNavigate();
    const navigateToLookUpInsuranceScreen = () => {
      navigate(ROUTES.LOOK_UP_INSURANCE_SCREEN);
    };
  
    const StyledMainBox = styled(Box)(({ theme }) => ({
      width: "100%",
      minHeight: 488,
      display: "flex",
      alignItems: "center",
    }));

    const HealingIconStyled = styled(HealingIcon)(({ theme }) => ({
        color: theme.palette.secondary.main,
        fontSize: 100
      }));
    
  
    return (
      <StyledMainBox>
        <MainInfoBox
        headerText={Strings.ABOUT_YOUR_DOCTORS}
        bodyText={Strings.REACH_OUT_TO_DOCS}
        icon={<HealingIconStyled/>}
      />
        <Box sx={{ flex: 1, paddingRight: "40px" }}>
          <Grid spacing={1} sx={{ marginLeft: "-10px", width: "100%" }} container>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Doctor first name"
                type="date"
                variant="outlined"
              ></TextField>
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Doctor last name"
                type="date"
                variant="outlined"
              ></TextField>
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
              ></TextField>
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                label="Pincode"
                
                variant="outlined"
              ></TextField>
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                label="Phone number"
                type="text"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                variant="outlined"
              ></TextField>
            </Grid>
  
            <Grid item md={12}>
              <StyledButton
                onClick={() => {
                  navigateToLookUpInsuranceScreen();
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
  
  export default AddYourDoctorsScreen;
  