import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import IconButton from "@mui/material/IconButton";

const SignupForm = () => {
  const StyledMainTitle = styled(Typography)(({}) => ({
    fontWeight: 800,
    marginBottom: "20px",
  }));
  const StyledInfoTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    marginBottom: "15px",
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
  }));

  const StyledVideoInfo = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
  }));

  const StyledPlayIcon = styled(PlayCircleFilledWhiteIcon)(({ theme }) => ({
    fontSize: 40,
  }));
  const StyledPlayInfo = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    fontWeight: 800,
    color: theme.palette.secondary.main,
  }));

  return (
    <Grid container>
      <Grid item md={6} lg={6} xl={6}>
        <StyledMainTitle color="secondary" variant="h3">
          Get Started
        </StyledMainTitle>
        <StyledInfoTitle variant="body1">
          You’re just a few moments away from switching to a better, simpler
          pharmacy. Let’s start with some contact information and selecting a
          password.
        </StyledInfoTitle>
        <StyledVideoInfo>
          <Box>
            <IconButton sx={{ padding: 0 }} color="secondary" size="large">
              <StyledPlayIcon />
            </IconButton>
          </Box>
          <Box>
            <StyledPlayInfo variant="body1">
              Signing Up to Digital Pharmacy(0:40)
            </StyledPlayInfo>
          </Box>
        </StyledVideoInfo>
      </Grid>
      <Grid item md={6} lg={6} xl={6}>
        Form
      </Grid>
    </Grid>
  );
};

export default SignupForm;
