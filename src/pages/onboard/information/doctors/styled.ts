import { styled, Box, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/CircleOutlined";

export const StyledInfoDoctorWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "20px",
}));

export const StyledAddIcon = styled(AddCircleOutlineIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const StyledLinkedLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginLeft: 10,
  fontSize: 14,
  fontWeight: 600,
}));
