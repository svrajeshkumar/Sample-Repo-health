import React, { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/logo.png";
import Grid from "@mui/material/Grid";
import {
  StyledBox,
  StyledMainTitle,
  StyledInfoContent,
  StyledCopyright,
  StyledNavLinkBox,
  StyledAnchorLink,
  StyledFooterLeftContainer,
  StyledFooterRightContainer,
} from "./styled";
import CallIcon from "@mui/icons-material/Call";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const FooterComponent: React.FC = () => {
  return (
    <Fragment>
      <StyledBox>
        <StyledMainTitle variant="h4">Questions?</StyledMainTitle>
        <StyledInfoContent variant="subtitle2" textAlign="center">
          Our team of Advisors are ready to answer any questions you have and
          set up your service.
        </StyledInfoContent>
        <Box sx={{ marginTop: "30px" }}>
          <img width={150} src={Logo} />
        </Box>
        <Box>
          <StyledCopyright variant="caption">
            © {new Date().getFullYear()} Edgepark
          </StyledCopyright>
        </Box>
      </StyledBox>
      <StyledNavLinkBox>
        <Grid container spacing={1}>
          <Grid item>
            <StyledAnchorLink>Notice of Policy</StyledAnchorLink>
          </Grid>
          <Grid item>
            <StyledAnchorLink>Website Privacy</StyledAnchorLink>
          </Grid>
          <Grid item>
            <StyledAnchorLink>
              Policy Patient/Client Bill of Rights Medicare DMEPOS Supplier
              Standards
            </StyledAnchorLink>
          </Grid>
          <Grid item>
            <StyledAnchorLink>Site Map</StyledAnchorLink>
          </Grid>
        </Grid>
      </StyledNavLinkBox>
    </Fragment>
  );
};

const MobileFooterComponent: React.FC = () => {
  return (
    <StyledBox>
      <StyledFooterLeftContainer>
        <Typography
          sx={{ marginBottom: "15px" }}
          variant="caption"
          component="p"
        >
          We are available by phone.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sm={6} lg={6} xl={6}>
            <Typography sx={{ fontWeight: "bold" }} variant="caption">
              General Support
            </Typography>
            <Typography variant="caption" component="p">
              Mon - Fri, 8 a.m. to 9 p.m. Eastern Sat, 9 a.m. to 3 p.m. Eastern
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box>
                <CallIcon sx={{ fontSize: "12px" }} />
              </Box>
              <Box>
                <Typography variant="caption" component="p">
                  {" "}
                  1.888.394.5375
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: "15px",
                marginTop: "15px",
              }}
            >
              <Box>
                <TwitterIcon sx={{ fontSize: "20px", marginRight: "15px" }} />
              </Box>
              <Box>
                <FacebookIcon sx={{ fontSize: "20px" }} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginBottom: "15px",
                flexDirection: "column",
              }}
            >
              <Box>
                <img src={Logo} width={120} />
              </Box>
              <Box>
                <Typography variant="caption">
                  ©{new Date().getFullYear()} Edgepark
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sm={6} lg={6} xl={6}>
            <Typography sx={{ fontWeight: "bold" }} variant="caption">
              Breast Pump Support
            </Typography>
            <Typography variant="caption" component="p">
              Mon - Fri, 8 a.m. to 9 p.m. Eastern
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Box>
                <CallIcon sx={{ fontSize: "12px" }} />
              </Box>
              <Box>
                <Typography variant="caption" component="p">
                  {" "}
                  1.888.394.5375
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: "15px",
              }}
            >
              <Box>
                <TwitterIcon sx={{ fontSize: "20px", marginRight: "15px" }} />
              </Box>
              <Box>
                <FacebookIcon sx={{ fontSize: "20px", marginRight: "15px" }} />
              </Box>
              <Box>
                <InstagramIcon sx={{ fontSize: "20px", marginRight: "15px" }} />
              </Box>
              <Box>
                <PinterestIcon sx={{ fontSize: "20px", marginRight: "15px" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </StyledFooterLeftContainer>
      <StyledFooterRightContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
            <Typography sx={{ fontWeight: "bold" }} variant="caption">
              Need More Help?
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
            <Typography sx={{ fontWeight: "bold" }} variant="caption">
              Quick Links
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
            <Typography sx={{ fontWeight: "bold" }} variant="caption">
              About Edgepark
            </Typography>
          </Grid>
        </Grid>
      </StyledFooterRightContainer>
    </StyledBox>
  );
};

export default FooterComponent;
