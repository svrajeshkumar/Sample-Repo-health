import {
  Box,
  Typography,
  Button,
  styled,
  TextField,
  Grid,
} from "@mui/material";
import { height } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../../assets/images";
import { MainInfoBox } from "../../../components/main-info-box";
import NavBar from "../../../components/navbar";
import ROUTES from "../../../navigation/routes";
import { StyledButton, StyledSearchButton } from "./style";
import HealingIcon from "@mui/icons-material/Healing";
import { Strings } from "../../../constants/strings";
import LabelTextField from "../../../components/text-field";

const AddYourDoctorsScreen: React.FC = () => {
  const navigate = useNavigate();
  const navigateToLookUpInsuranceScreen = () => {
    navigate(ROUTES.LOOK_UP_INSURANCE_SCREEN);
  };

  const [searchDoctorView, setSearchDoctorView] = useState(false);

  const [selectedDoctorView, setSelectedDoctorView] = useState(false);

  const StyledMainBox = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: 488,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "80px",
    paddingRight: "80px",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      paddingRight: "20px",
      paddingLeft: "20px",
    },
  }));

  const HealingIconStyled = styled(HealingIcon)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: 100,
  }));

  const DoctorsArray = [
    {
      doctorName: "Divjoot Sooch",
      add1: "SMG OPD",
      add2: "130 Quincy street, MD Avenue ",
      add3: "504-238-990",
    },
    {
      doctorName: "Divjoot Sooch",
      add1: "MFG OPD",
      add2: "130 Martha Ville, MD Avenue ",
      add3: "506-348-990",
    },
    {
      doctorName: "Divjoot Sooch",
      add1: "MFG OPD",
      add2: "130 Martha Ville, MD Avenue ",
      add3: "506-348-990",
    },
    {
      doctorName: "Divjoot Sooch",
      add1: "MFG OPD",
      add2: "130 Martha Ville, MD Avenue ",
      add3: "506-348-990",
    },
  ];

  return (
    <StyledMainBox>
      <MainInfoBox
        headerText={Strings.ADD_YOUR_DOCTORS}
        bodyText={Strings.REACH_OUT_TO_DOCS}
        icon={<HealingIconStyled />}
      />
      <Box sx={{ flex: 1, paddingRight: "40px" }}>
        {
          <Grid
            spacing={1}
            sx={{ marginLeft: "-10px", width: "100%" }}
            container
          >
            {searchDoctorView ? (
              selectedDoctorView ? (
                <React.Fragment>
                  
                  <Grid item md={9}>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "150px",
                        overflowY: "scroll",
                      }}
                    >
                      <Box
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          borderColor: "grey",
                          borderStyle: "solid",
                          borderWidth: "1px",
                          padding: "10px",
                          marginTop: "5px",
                          borderRadius: "10px",
                        }}
                      >
                        <Box
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography sx={{ fontWeight: "bold" }}>
                            {DoctorsArray[0].doctorName}
                          </Typography>
                          <StyledSearchButton
                            onClick={() => {
                              setSelectedDoctorView(true);
                            }}
                          >
                            Change
                          </StyledSearchButton>
                        </Box>
                        <Typography sx={{ color: "grey" }}>
                          {DoctorsArray[0].add1} <br />
                          {DoctorsArray[0].add2} <br />
                          {DoctorsArray[0].add3}
                        </Typography>
                      </Box>
                    </Box>
                    <Grid item md={6}>
                      <StyledButton
                        onClick={() => {
                          navigateToLookUpInsuranceScreen();
                        }}
                      >
                        Next
                      </StyledButton>
                    </Grid>
                  </Grid>
                  {/* <Grid item md={12}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      10 miles from your given address
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <StyledButton
                      onClick={() => {
                        navigateToLookUpInsuranceScreen();
                      }}
                    >
                      Search
                    </StyledButton>
                  </Grid> */}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Grid item md={6}>
                    <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                      Doctors in your area
                    </Typography>
                  </Grid>
                  <Grid item md={9}>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "400px",
                        overflowY: "scroll",
                      }}
                    >
                      {DoctorsArray.map((value) => {
                        return (
                          <Box
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              borderColor: "grey",
                              borderStyle: "solid",
                              borderWidth: "1px",
                              padding: "10px",
                              marginTop: "5px",
                              borderRadius: "10px",
                            }}
                          >
                            <Box
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Typography sx={{ fontWeight: "bold" }}>
                                {value.doctorName}
                              </Typography>
                              <StyledSearchButton
                                onClick={() => {
                                  setSelectedDoctorView(true);
                                }}
                              >
                                Add
                              </StyledSearchButton>
                            </Box>
                            <Typography sx={{ color: "grey" }}>
                              {value.add1} <br />
                              {value.add2} <br />
                              {value.add3}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Grid>
                  <Grid item md={12}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      10 miles from your given address
                    </Typography>
                  </Grid>

                  <Grid item md={6}>
                    <StyledButton
                      onClick={() => {
                        navigateToLookUpInsuranceScreen();
                      }}
                    >
                      Search
                    </StyledButton>
                  </Grid>
                </React.Fragment>
              )
            ) : (
              <React.Fragment>
                <Grid item md={6}>
                  <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
                    Search for your doctor
                  </Typography>
                </Grid>
                <Grid item md={12}>
                  <LabelTextField
                    label="Doctor last name"
                    placeholder="Enter doctors last name"
                  />
                </Grid>
                <Grid item md={12}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    10 miles from your given address
                  </Typography>
                </Grid>

                <Grid item md={6}>
                  <StyledButton
                    onClick={() => {
                      setSearchDoctorView(true);
                    }}
                  >
                    Search
                  </StyledButton>
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        }
      </Box>
    </StyledMainBox>
  );
};

export default AddYourDoctorsScreen;
