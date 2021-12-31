import { FC, Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchInputComponent from "../../../components/searchInput";
import ScannedIcon from "../../../assets/icons/scanned.svg";
import UploadIcon from "../../../assets/icons/upload.svg";
import {
  StyledMainTitle,
  StyledActionCard,
  StyledActionCardTitle,
  StyledButtonBox,
  StyledAnchorLink,
  StyledMainContainerBox,
  StyledSearchWrapper,
  StyledActionCardIcon,
} from "./style";

const AddVitaminsScreen: FC = () => {
  return (
    <StyledMainContainerBox>
      <Box>
        <StyledMainTitle variant="h3">Add Vitamins</StyledMainTitle>
        <Typography
          sx={{ width: { md: "50% !important" } }}
          variant="subtitle1"
          component="p"
        >
          Add any vitamins you take as supplements. We’ll reach out
          to your previous pharmacy or your doctor to transfer your
          vitamins to edgepark.
        </Typography>
      </Box>
      <StyledSearchWrapper>
        <SearchInputComponent placeholder="Search..." />
      </StyledSearchWrapper>
      <Box sx={{ marginTop: "40px" }}>
        <Grid spacing={2} container>
          <Grid item xs={12} md={4} lg={4} sm={6}>
            <StyledActionCard>
              <StyledActionCardIcon src={UploadIcon} />
              <StyledActionCardTitle variant="h6">
                Upload Vitamins
              </StyledActionCardTitle>
            </StyledActionCard>
          </Grid>
          <Grid item xs={12} md={4} lg={4} sm={6}>
            <StyledActionCard>
              <StyledActionCardIcon src={ScannedIcon} />
              <StyledActionCardTitle variant="h6">
                Scan Your Vitamins
              </StyledActionCardTitle>
            </StyledActionCard>
          </Grid>
        </Grid>
      </Box>
      <StyledButtonBox>
        <Button disableElevation={true} variant="contained" color="secondary">
          Add Vitmains
        </Button>
      </StyledButtonBox>
      <Box>
        <StyledAnchorLink>I don’t have any prescription</StyledAnchorLink>
        <StyledAnchorLink>
          What medications does edgepark deliver?
        </StyledAnchorLink>
      </Box>
    </StyledMainContainerBox>
  );
};

export default AddVitaminsScreen;
