import { Box, Typography, Button, Input, TextField } from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import { IMAGES } from "../../../assets/images";
import NavBar from "../../../components/navbar";

const SignUpScreen: React.FC = () => {
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
                You’re just a few moments away from switching to a better,
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
                height: "50vh",
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
              <Button sx={{
                  backgroundColor: "#0074c0",
                  color: "white",
                  borderRadius: "20px",
                  
                  alignSelf: "center",
                  paddingRight: "100px",
                  paddingLeft: "100px"
              }}>Next</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignUpScreen;
