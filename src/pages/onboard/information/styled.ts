import { styled, Box } from "@mui/material";

export const StyledInformationWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "65px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "25px",
  },
}));
