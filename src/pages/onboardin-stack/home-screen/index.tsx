import { Button, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets/images";
import NavBar from "../../../components/navbar";
import ROUTES from "../../../navigation/routes";

const HomeScreen: React.FC = () => {
  let navigate = useNavigate();
  const navigateToSignUpScreen = () => {
    navigate(ROUTES.SIGNUPSCREEN);
  };

  return (
    <Box>
      <Box display="flex" flexDirection="column" height={"100vh"} flex={1}>
        <NavBar/>
        <Box
          sx={{
            backgroundColor: "red",
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-around"
          }}
          flex={0.92}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems:"flex-start",
              marginLeft: "14vw"
            }}
          >
            <Typography sx={{
                fontSize: "40px"
            }}>Your Medication To You, </Typography>
            <Typography sx={{
                fontSize: "40px"
            }}>Safely Delivered</Typography>
            <Typography sx={{
                fontSize: "20px"
            }}>A pharmacy to ease your meds.</Typography>
          </Box>
          
          <Box component="img" src={IMAGES.PHARMACY_IMAGE}/>
       
          
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
