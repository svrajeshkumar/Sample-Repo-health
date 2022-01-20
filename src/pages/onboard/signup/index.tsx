import { FC, useState } from "react";
import ReCaptchaV2 from "react-google-recaptcha";

import ROUTES from "../../../navigation/routes";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import {
  StyledPlayIcon,
  StyledFooterInfo,
  StyledSignupWrapper,
} from "./styled";
import SeactionH3 from "../../../components/Typography/section-h3";
import SeactionP from "../../../components/Typography/section-body1";
import SeactionH6 from "../../../components/Typography/section-h6";
import FormTextInput from "../../../components/formFields/textInput";
import FormMaskInput from "../../../components/formFields/maskInput";
import FormSelectInput from "../../../components/formFields/selectInput";
import FormActionButton from "../../../components/formFields/button";
import { useNavigate } from "react-router-dom";

// API Service
import {
  apiUserRegister,
  apiAddShippingAddress,
  apiUpdateAboutMe,
  apiSearchAllergies,
  apiSearchConditions,
  apiSearchDoctors,
  apiSearchInsurances,
} from "../../../service/api";

const CAPTCHA_SITE_KEY = "6LcLuxceAAAAAHULHoVfgUpkl-xVAA7vNBZMKa0v";
const OnboardSignup: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleToken = (token) => {};
  const handleExpire = () => {};
  const [fristName, setFristName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [source, setSource] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <StyledSignupWrapper component="div">
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={6}>
          <SeactionH3 title="Get Started" />
          <Box sx={{ marginTop: "20px" }}>
            <SeactionP title="You’re just a few moments away from switching to a better, simpler pharmacy. Let’s start with some contact information and selection a password." />
          </Box>
          <Box
            sx={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              marginBottom: { xs: "20px" },
            }}
          >
            <StyledPlayIcon />
            <SeactionH6 title="Signing Up to Edgepark (0:40)" />
          </Box>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={6}>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item md={6} xs={12} lg={6} sm={6}>
                <FormTextInput
                  fullWidth={true}
                  size="small"
                  value={fristName}
                  varient="outlined"
                  id="input-legal-frist-name"
                  label="Legal First Name"
                  onChange={(e) => {
                    setFristName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item md={6} xs={12} lg={6} sm={6}>
                <FormTextInput
                  fullWidth={true}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  size="small"
                  varient="outlined"
                  id="input-legal-last-name"
                  label="Legal Last Name"
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextInput
                  autoComplete="off"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  fullWidth={true}
                  size="small"
                  varient="outlined"
                  id="input-email-address"
                  label="Email Address"
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextInput
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={() => {}}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth={true}
                  size="small"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  varient="outlined"
                  id="input-password"
                  label="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextInput
                  autoComplete="off"
                  fullWidth={true}
                  InputProps={{
                    inputComponent: FormMaskInput as any,
                    value: phone,
                    onChange: (e) => {
                      setPhone(e.target.value);
                    },
                  }}
                  size="small"
                  varient="outlined"
                  id="input-phone"
                  label="Phone Number"
                />
              </Grid>
              <Grid item xs={12}>
                <FormSelectInput
                  value={source}
                  onChange={(e: any) => {
                    setSource(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label=""
                    />
                  </Box>
                  <Box sx={{ marginTop: "5px" }}>
                    <Typography variant="body1">Invite a Caregiver</Typography>
                    <StyledFooterInfo
                      variant="caption"
                      display="block"
                      gutterBottom
                    >
                      Share account access with a family member, friend or a
                      health professional. Learn more
                    </StyledFooterInfo>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <ReCaptchaV2
                  type="image"
                  onChange={handleToken}
                  onExpire={handleExpire}
                  sitekey={CAPTCHA_SITE_KEY}
                />
              </Grid>
              <Grid item xs={12}>
                <Box style={{ marginTop: "20px" }}>
                  <StyledFooterInfo
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    By continuing, you agree to edgepark’s Terms of Use, Child
                    Safety Waiver, Notice of Privacy Practices, and Privacy
                    Notice.
                  </StyledFooterInfo>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "20px",
                    justifyContent: { xs: "center" },
                  }}
                >
                  <FormActionButton
                    disableElevation
                    id="button-submit"
                    size="small"
                    disabled={loading}
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      setLoading(true);
                      apiUserRegister({
                        first_name: fristName,
                        last_name: lastName,
                        email: email,
                        phone: phone,
                        password: password,
                        source: source,
                      })
                        .then((response: any) => {
                          setLoading(false);
                          const { data } = response;
                          navigate(
                            `${ROUTES.PATIENT_INFO}?id=${data.data._id}&&name=${data.data.first_name}`
                          );
                        })
                        .catch((error) => {
                          setLoading(false);
                          alert(
                            "Something went wrong please fill all the input and try again..."
                          );
                        });
                    }}
                  >
                    Next
                  </FormActionButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </StyledSignupWrapper>
  );
};

export default OnboardSignup;
