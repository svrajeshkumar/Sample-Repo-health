import { Box, Typography, Button, Input, TextField } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets/images";
import NavBar from "../../../components/navbar";
import ROUTES from "../../../navigation/routes";

const InsuranceDetailsScreen: React.FC = () => {
    const navigate = useNavigate()
  const navigateToUploadPrescriptionScreen = () => {
    navigate(ROUTES.UPLOAD_PRESCRIPTION_SCREEN)
  }
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
                Link your Insurance{" "}
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                }}
              >
                We have partnered with top insurance companies, for you.
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
              <TextField
                label="Insurance ID Number"
                type="email"
                variant="outlined"
              ></TextField>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TextField
                  label="Rx Bin"
                  variant="outlined"
                  sx={{
                    paddingRight: "10px",
                  }}
                ></TextField>
                <TextField label="Rx Group" variant="outlined"></TextField>
              </Box>

              <TextField
                label="Rx PCN"
                type="email"
                variant="outlined"
              ></TextField>
              <TextField
                label="Insurance Phone Number"
                type="text"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                variant="outlined"
              ></TextField>
              <Button
              onClick={() => {navigateToUploadPrescriptionScreen()}}
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

export default InsuranceDetailsScreen;
