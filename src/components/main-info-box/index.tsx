import { Box, Typography } from "@mui/material";
import React from "react";
import { StyledMainBox } from "./style";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { styled } from "@mui/system";
import { Strings } from "../../constants/strings";

interface MainInfoBox {
  headerText: string;
  bodyText: string;
  icon: JSX.Element;
  isSignUpScreen?: boolean;
}

const PlayCircleFilledWhiteIconStyled = styled(PlayCircleFilledWhiteIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 50,
  marginRight: "10px"
}));

export const MainInfoBox: React.FC<MainInfoBox> = ({
  headerText,
  bodyText,
  icon,
  isSignUpScreen = false
}) => {
  return (
    <StyledMainBox>
      {icon}
      <Typography color="primary" component="h2" variant="h3">
        {headerText}
        <br />
      </Typography>
      <Typography
        sx={{ paddingRight: { md: "80px" } }}
        variant="body1"
        component="p"
      >
       {bodyText}
      </Typography>

     {
       isSignUpScreen && <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: "10px"}}>
       <PlayCircleFilledWhiteIconStyled />
       <Typography color="secondary" component="h5" variant="h6">
       {Strings.SIGNING_UP_TO_EDGEPARK}
       <br />
     </Typography>
     </Box>
     } 
    </StyledMainBox>
  );
};
