import { styled, Box, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const StyledInfoDoctorWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "20px",
  [theme.breakpoints.up("sm")]: {
    width: `600px !important`,
  },
}));

export const StyledAddIcon = styled(AddCircleOutlineIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const StyledLinkedLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: 10,
  fontSize: 14,
  fontWeight: 600,
}));
