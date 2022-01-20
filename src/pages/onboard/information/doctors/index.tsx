import React, { Fragment, useState } from "react";
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
import FormTextInput from "../../../../components/formFields/textInput";
import { apiSearchDoctors } from "../../../../service/api";
import DoctorSearchCard from "../../../../components/cards/doctor";

interface onboardDoctorsInfoProps {
  onClick: (data: any) => void;
}

const StyledInfoLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
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

const StyledBackLinkButton = styled(Button)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.primary.main,
}));

const OnboardDoctorsInfo: React.FC<onboardDoctorsInfoProps> = ({ onClick }) => {
  const [searchData, setSearchData] = useState([]);
  const [selectedDoctors, setSelectedDoctors] = useState<any>(null);
  const [searchParam, setSearchParam] = useState();

  return (
    <StyledInfoDoctorWrapper>
      <Grid container>
        <Grid item xs={12}>
          {searchData.length >= 1 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <StyledBackLinkButton
                onClick={() => {
                  setSearchData([]);
                }}
              >
                Back to search
              </StyledBackLinkButton>
            </Box>
          )}
        </Grid>
        <Grid item xs={12}>
          {searchData.length <= 0 && (
            <Fragment>
              <Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
                <StyledInfoLabel>Search for your doctor</StyledInfoLabel>
              </Box>
              <Box>
                <FormTextInput
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                  size="small"
                  onChange={(e) => {
                    setSearchParam(e.target.value);
                  }}
                  varient="outlined"
                  id="input-allergies"
                  label="Doctor’s Last Name"
                  placeholder="Enter Doctor’s Last Name"
                />
              </Box>

              <Box
                sx={{
                  marginTop: "10px",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <StyledDistanceInfo>
                  10 miles from 43611-1156
                </StyledDistanceInfo>
                <StyledLinkButton>Change</StyledLinkButton>
              </Box>
            </Fragment>
          )}
        </Grid>

        {selectedDoctors && searchData.length <= 0 && (
          <Grid container spacing={2} alignItems="stretch" item xs={12}>
            <Grid item md={6} xs={12}>
              <DoctorSearchCard
                showAddbtn={false}
                name={`${selectedDoctors.first_name} ${selectedDoctors.last_name}`}
                address={selectedDoctors.addresses}
                contact={selectedDoctors.phone}
              />
            </Grid>
          </Grid>
        )}

        <Grid container spacing={2} alignItems="stretch" item xs={12}>
          {searchData.map((item, index) => (
            <Grid key={index} item md={6} xs={12}>
              <DoctorSearchCard
                onClickAdd={() => {
                  setSelectedDoctors(item);
                  setSearchData([]);
                }}
                showAddbtn={true}
                name={`${item.first_name} ${item.last_name}`}
                address={item.addresses}
                contact={item.phone}
              />
            </Grid>
          ))}
        </Grid>

        {searchData.length <= 0 && (
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                marginTop: "20px",
                marginBottom: "20px",
                justifyContent: { xs: "center" },
              }}
            ></Box>
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
                onClick={() => {
                  if (selectedDoctors) {
                    onClick({});
                  } else {
                    apiSearchDoctors(searchParam)
                      .then((res: any) => {
                        const { data } = res;
                        setSearchData(data.data);
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }
                }}
              >
                {selectedDoctors ? "Next" : "Search"}
              </FormActionButton>
            </Box>
          </Grid>
        )}
      </Grid>
    </StyledInfoDoctorWrapper>
  );
};

export default OnboardDoctorsInfo;
