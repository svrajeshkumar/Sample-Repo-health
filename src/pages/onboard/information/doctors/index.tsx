import React from "react";
import {
  Box,
  styled,
  Typography,
  Grid,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledInfoDoctorWrapper,
  StyledAddIcon,
  StyledLinkedLabel,
} from "./styled";
import FormIconTextInput from "../../../../components/formFields/iconTextInput";
import FormActionButton from "../../../../components/formFields/button";
// import DoctorSearchCard from "../../../../components/cards/doctor-search";

interface onboardDoctorsInfoProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const OnboardDoctorsInfo: React.FC<onboardDoctorsInfoProps> = ({ onClick }) => {
  const StyledInfoLabel = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 600,
  }));
  const StyledDistanceInfo = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: 12,
    marginLeft: 10,
  }));

  const StyledLinkButton = styled(Button)(({ theme }) => ({
    width: 100,
    fontSize: 12,
    textDecoration: "underline",
  }));

  return (
    <StyledInfoDoctorWrapper>
      <Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
        <StyledInfoLabel>Search for your doctor</StyledInfoLabel>
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <FormIconTextInput
            autoComplete="off"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            fullWidth={true}
            size="small"
            placeholder="Enter Doctor’s Last Name"
            varient="outlined"
            id="input-condition"
            label="Doctor’s Last Name"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "10px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <StyledDistanceInfo>10 miles from 43611-1156</StyledDistanceInfo>
        <StyledLinkButton>Change</StyledLinkButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
          justifyContent: { xs: "center" },
        }}
      >
        {/* <DoctorSearchCard /> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
          alignItems: "center",
          justifyContent: { xs: "center" },
        }}
      >
        <StyledAddIcon />
        <StyledLinkedLabel>Add another Doctor</StyledLinkedLabel>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          marginBottom: "20px",
          justifyContent: { xs: "center" },
        }}
      >
        <FormActionButton
          disableElevation
          id="button-submit"
          size="small"
          variant="contained"
          color="secondary"
          onClick={onClick}
        >
          Next
        </FormActionButton>
      </Box>
    </StyledInfoDoctorWrapper>
  );
};

export default OnboardDoctorsInfo;
