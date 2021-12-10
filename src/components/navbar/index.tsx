import { Box, Typography, Button } from "@mui/material";
import React from "react";


const NavBar:React.FC = () => {
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
        <Button onClick={() => {}}>
            Sign Up
        </Button>
    </Box>
  )
}

export default NavBar