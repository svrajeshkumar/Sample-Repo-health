import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../navigation/routes";


const NavBar:React.FC = () => {
    const navigate = useNavigate()
    const navigateToSignUpScreen = () => {
        navigate(ROUTES.SIGNUPSCREEN);
      };
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        flex: 0.08,
        width: "100%"
    }}>
        <Typography component={"a"} onClick={() => {}}>
            How It Works
        </Typography>
        <Typography component={"a"} onClick={() => {}}>
            Pricing
        </Typography>
        <Typography component={"a"} onClick={() => {}}>
            Reviews
        </Typography>
        <Typography component={"a"} onClick={() => {}}>
            Folks
        </Typography>
        <Button onClick={() => navigateToSignUpScreen()}>
            Sign Up
        </Button>
    </Box>
  )
}

export default NavBar