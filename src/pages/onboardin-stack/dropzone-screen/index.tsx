import { Button, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets/images";
import NavBar from "../../../components/navbar";
import ROUTES from "../../../navigation/routes";

const DropZoneScreen: React.FC = () => {
  
  return (
    <Box>
      <Box display="flex" flexDirection="column" height={"100vh"} flex={1}>
        <NavBar/>
        
      </Box>
    </Box>
  );
};

export default DropZoneScreen;
