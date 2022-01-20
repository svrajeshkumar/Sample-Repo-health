import { styled, Box } from "@mui/material";

export const StyledShippingAddressWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "20px",
  [theme.breakpoints.up("sm")]: {
    width: `400px !important`,
  },
}));
