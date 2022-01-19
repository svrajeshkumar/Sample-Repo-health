import React from "react";
import {
  Grid,
  Box,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormTextInput from "../../../../components/formFields/textInput";
import SeactionP from "../../../..//components/Typography/section-body1";

import {
  StyledCaptionLbl,
  StyledRadioButton,
  StyledCancelIcon,
  StyledListItem,
} from "./styled";
import FormActionButton from "../../../../components/formFields/button";
import FormIconTextInput from "../../../../components/formFields/iconTextInput";

// MUI Imports
// import Grid from '@mui/material/Grid';
// import FormHelperText from '@mui/material/FormHelperText';

interface onBoardProfile {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const OnBoardProfile: React.FC<onBoardProfile> = ({ onClick }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormTextInput
          fullWidth={true}
          size="small"
          varient="outlined"
          id="input-date"
          label="Date of Birth"
        />
      </Grid>
      <Grid item xs={12}>
        <StyledCaptionLbl>Sex at birth</StyledCaptionLbl>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginRight: "10px" }}>
            <FormActionButton
              disableElevation
              id="button-submit"
              size="small"
              variant="contained"
              color="secondary"
            >
              Male
            </FormActionButton>
          </Box>
          <Box>
            <StyledRadioButton
              disableElevation
              id="button-submit"
              size="small"
              variant="outlined"
              color="secondary"
            >
              Female
            </StyledRadioButton>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <FormTextInput
          fullWidth={true}
          size="small"
          type="password"
          varient="outlined"
          id="input-security-number"
          label="Last 4 digits of your Social Security Number"
        />
      </Grid>

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
          placeholder="Enter allergies"
          varient="outlined"
          id="input-password"
          label="Add allergies"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          label="No Allergies"
          control={
            <Checkbox
              inputProps={{
                "aria-label": "Checkbox demo",
              }}
            />
          }
        ></FormControlLabel>
      </Grid>
      <Grid item xs={12}>
        <StyledCaptionLbl>Health Conditions</StyledCaptionLbl>
      </Grid>
      <Grid item xs={12}>
        <StyledListItem>
          <Box sx={{ marginLeft: "10px" }}>
            <SeactionP title="Type 2 Diabetes" />
          </Box>
          <Box sx={{ marginLeft: "10px" }}>
            <StyledCancelIcon />
          </Box>
        </StyledListItem>
        <StyledListItem>
          <Box sx={{ marginLeft: "10px" }}>
            <SeactionP title="Heart Failure" />
          </Box>
          <Box sx={{ marginLeft: "10px" }}>
            <StyledCancelIcon />
          </Box>
        </StyledListItem>
      </Grid>
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
          placeholder="Enter health condition"
          varient="outlined"
          id="input-condition"
          label="Enter health condition"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          label="No conditions"
          control={<Checkbox />}
        ></FormControlLabel>
      </Grid>
      <Grid item xs={12} md={4}>
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
            Continue
          </FormActionButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OnBoardProfile;
