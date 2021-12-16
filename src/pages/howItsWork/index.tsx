import React from "react";
import { Box, styled, Typography, Grid } from "@mui/material";

const HowItsWorkScreen: React.FC = () => {
  const StyledMainBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: 488,
    display: "flex",
    alignItems: "center",
  }));

  const StyledImageBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: 300,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundImage: `url(https://cdn.aarp.net/content/dam/aarp/health/drugs_supplements/2018/10/1140-pharmacist-woman.jpg)`,
  }));

  return (
    <StyledMainBox>
      <Grid container alignItems="center">
        <Grid
          sx={{ paddingLeft: { md: `40px` }, paddingRight: { md: "30px" } }}
          item
          md={6}
        >
          <Typography color="primary" component="h2" variant="h3">
            How Our Digital
            <br />
            Pharmacy Work's ?
          </Typography>
          <Typography
            sx={{ paddingRight: { md: "80px" } }}
            variant="body1"
            component="p"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centurie
          </Typography>
        </Grid>
        <Grid item md={6}>
          <StyledImageBox />
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default HowItsWorkScreen;
