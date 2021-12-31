import React from "react";

import { Box, styled, TextField, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MainInfoBox } from "../../../components/main-info-box";
import { Strings } from "../../../constants/strings";
import ROUTES from "../../../navigation/routes";
import { StyledButton } from "./style";
import CottageIcon from '@mui/icons-material/Cottage';

const ShippingDetailsScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToAboutYouScreen = () => {
    navigate(ROUTES.ABOUT_YOU_SCREEN);
  };

  const StyledMainBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: 488,
    display: "flex",
    alignItems: "center",
  }));

  const CottageIconStyled = styled(CottageIcon)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: 100
  }));

  return (
    <StyledMainBox>
      <MainInfoBox
        headerText={Strings.YOUR_SHIP_ADD}
        bodyText={Strings.SHIP_RIGHT_TO_DOOR}
        icon={<CottageIconStyled/>}
      />
      <Box sx={{ flex: 1, paddingRight: "40px" }}>
        <Grid spacing={1} sx={{ marginLeft: "-10px", width: "100%" }} container>
          
          <Grid item md={12}>
            <TextField
              fullWidth
              label={Strings.STREET_ADD_1}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label={Strings.STREET_ADD_2}
              
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label={Strings.ZIP_CD}
              type="text"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={9}>
            <TextField
              fullWidth
              label={Strings.CITY}
              type="text"
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={3}>
            <TextField
              fullWidth
              label={Strings.STATE}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item md={12}>
            <StyledButton
              onClick={() => {
                navigateToAboutYouScreen();
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

export default ShippingDetailsScreen;
