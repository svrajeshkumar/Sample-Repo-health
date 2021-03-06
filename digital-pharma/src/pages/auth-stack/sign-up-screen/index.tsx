import { Box, Typography, Button, Input, TextField, Dialog } from "@mui/material";
import { height } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets/images";
import NavBar from "../../../components/navbar";
import ROUTES from "../../../navigation/routes";
import ScanditBarcodeScanner from "scandit-sdk-react";
import { KEYS } from "../../../constants/keys";
import { Barcode, ScanSettings } from "scandit-sdk";

const SignUpScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToInsuranceDetailsScreen = () => {
    navigate(ROUTES.INSURANCE_DETAILS_SCREEN);
  };

 
  return (
    <div>
      <Box>
        <Box display="flex" flexDirection="column" height={"100vh"} flex={1}>
          <NavBar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            flex={0.92}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginLeft: "14vw",
                flex: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: "40px",
                }}
              >
                Get Started{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                }}
              >
                You're just a few moments away from switching to a better,
                simpler pharmacy
              </Typography>
            </Box>

            <Box
              component="form"
              sx={{
                flex: 0.5,
                display: "flex",
                flexDirection: "column",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "60vh",
                marginRight: "10vw",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TextField
                  label="Legal First Name"
                  variant="outlined"
                  sx={{
                    paddingRight: "10px",
                  }}
                ></TextField>
                <TextField
                  label="Legal Last Name"
                  variant="outlined"
                ></TextField>
              </Box>
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
              ></TextField>
              <TextField
                label="Password"
                type="password"
                variant="outlined"
              ></TextField>
              <TextField
                label="Phone Number"
                type="text"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                variant="outlined"
              ></TextField>
              <TextField label="Doctors Name" variant="outlined"></TextField>
              <Button
                onClick={() => 
                  navigateToInsuranceDetailsScreen()
               
                
                }
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
            </Box>
           
           
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignUpScreen;
