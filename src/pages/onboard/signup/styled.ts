import { Box, styled, Typography } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { grey } from "@mui/material/colors";

export const StyledSignupWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "65px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "25px",
  },
}));

export const StyledPlayIcon = styled(PlayCircleFilledIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "35px",
  marginRight: "6px",
}));
export const StyledFooterInfo = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: grey[500],
}));
