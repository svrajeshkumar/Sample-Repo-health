import React from "react";
import {
  Grid,
  Box,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  IconButton,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormTextInput from "../../../../components/formFields/textInput";
import SeactionP from "../../../..//components/Typography/section-body1";

import {
  StyledCaptionLbl,
  StyledRadioButton,
  StyledCheckedRadio,
  StyledCancelIcon,
  StyledListItem,
  StyledProfileWrapper,
} from "./styled";
import FormActionButton from "../../../../components/formFields/button";
import FormIconTextInput from "../../../../components/formFields/iconTextInput";
import {
  apiSearchAllergies,
  apiSearchConditions,
} from "../../../../service/api";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// MUI Imports
// import Grid from '@mui/material/Grid';
// import FormHelperText from '@mui/material/FormHelperText';

interface onBoardProfile {
  onClick: (data: any) => void;
}

interface radioProps {
  content: string;
}

const OnBoardProfile: React.FC<onBoardProfile> = ({ onClick }) => {
  const [allergies, setAllergies] = React.useState([]);
  const [showNumber, setShowNumber] = React.useState(false);
  const [gender, setGender] = React.useState("M");
  const [secureNumber, setSecureNumber] = React.useState();
  const [dob, setDob] = React.useState();
  const [conditions, setConditions] = React.useState([]);

  const RadioButton = (props) => {
    return (
      <Radio
        sx={{
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<StyledCheckedRadio content={props.content} />}
        icon={<StyledRadioButton content={props.content} />}
        {...props}
      />
    );
  };

  return (
    <StyledProfileWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormTextInput
            fullWidth={true}
            size="small"
            varient="outlined"
            id="input-date"
            label="Date of Birth"
            placeholder="dd/mm/yyyy"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledCaptionLbl>Sex at birth</StyledCaptionLbl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              row={true}
              defaultValue={gender}
              aria-labelledby="select-gender"
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <FormControlLabel
                value="M"
                label=""
                control={<RadioButton content="Male" />}
              />
              <FormControlLabel
                value="F"
                label=""
                control={<RadioButton content="Female" />}
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormTextInput
            type={showNumber ? "number" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowNumber(!showNumber)}
                    onMouseDown={() => {}}
                    edge="end"
                  >
                    {showNumber ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth={true}
            size="small"
            value={secureNumber}
            onChange={(e) => {
              setSecureNumber(e.target.value);
            }}
            varient="outlined"
            id="input-security-number"
            label="Last 4 digits of your Social Security Number"
          />
        </Grid>

        <Grid item xs={12}>
          <FormTextInput
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth={true}
            size="small"
            onChange={(e) => {
              apiSearchAllergies(e.target.value)
                .then(({ data }) => {
                  let _data = [];
                  setAllergies(data.data);
                })
                .catch((error) => {
                  setAllergies([]);
                });
            }}
            varient="outlined"
            id="input-allergies"
            label="Add allergies"
            placeholder="Enter allergies"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="No Allergies"
            control={
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    setAllergies([]);
                  }
                }}
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
          {allergies.map((item, index) => (
            <StyledListItem key={index}>
              <Box sx={{ marginLeft: "10px" }}>
                <SeactionP title={item.allergy_name} />
              </Box>
              <Box sx={{ marginLeft: "10px" }}>
                <IconButton
                  onClick={() => {
                    console.log("oncliek");
                    let items = [...allergies];
                    setAllergies(
                      items.filter(
                        (itm, index) => itm.allergy_name !== item.allergy_name
                      )
                    );
                  }}
                >
                  <StyledCancelIcon />
                </IconButton>
              </Box>
            </StyledListItem>
          ))}
        </Grid>

        <Grid item xs={12}>
          <FormTextInput
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth={true}
            size="small"
            onChange={(e) => {
              apiSearchConditions(e.target.value)
                .then(({ data }) => {
                  setConditions(data.data);
                })
                .catch((error) => {
                  setConditions([]);
                });
            }}
            varient="outlined"
            id="input-condition"
            label="Enter health condition"
            placeholder="Enter health condition"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            label="No conditions"
            control={
              <Checkbox
                onChange={(e) => {
                  if (e.target.value) {
                    setConditions([]);
                  }
                }}
              />
            }
          ></FormControlLabel>
        </Grid>

        <Grid item xs={12}>
          {conditions.map((item, index) => (
            <StyledListItem key={index}>
              <Box sx={{ marginLeft: "10px" }}>
                <SeactionP title={item.condition_name} />
              </Box>
              <Box sx={{ marginLeft: "10px" }}>
                <IconButton
                  onClick={() => {
                    let items = [...conditions];
                    setConditions(
                      items.filter(
                        (itm, index) => itm.condition_id !== item.condition_id
                      )
                    );
                  }}
                >
                  <StyledCancelIcon />
                </IconButton>
              </Box>
            </StyledListItem>
          ))}
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
              onClick={() => {
                onClick({
                  allergies,
                  showNumber,
                  gender,
                  dob,
                  secureNumber,
                  conditions,
                });
              }}
            >
              Continue
            </FormActionButton>
          </Box>
        </Grid>
      </Grid>
    </StyledProfileWrapper>
  );
};

export default OnBoardProfile;
