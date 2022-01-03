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
import LabelTextField from "../../../components/text-field";

const LookUpInsuranceScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToUploadPrescriptionScreen = () => {
    navigate(ROUTES.UPLOAD_PRESCRIPTION_SCREEN);
  };

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
            <LabelTextField 
             label="Insurance ID Number"
             placeholder=""
            />
            
          </Grid>
          <Grid item md={6}>
            <LabelTextField 
            label="Rx Bin"
            placeholder=""
            />
          
          </Grid>
          <Grid item md={12}>
           <LabelTextField  
           label="Rx Group"
           placeholder=""
           />
          </Grid>
          <Grid item md={12}>
            <LabelTextField 
            label="Rx PCN"
            placeholder=""
            />
          </Grid>
          <Grid item md={12}>
           <LabelTextField 
             label="Insurance Phone Number"
             placeholder=""
           />
          </Grid>

          <Grid item md={6}>
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
