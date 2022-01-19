import { styled, FormHelperText, Button, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { grey } from "@mui/material/colors";

export const StyledCaptionLbl = styled(FormHelperText)(({ theme }) => ({
  paddingLeft: 10,
  FontWeight: 700,
}));

export const StyledRadioButton = styled(Button)(({ theme }) => ({
  height: "40px !important",
  borderRadius: "7px",
  width: 150,
  borderColor: theme.palette.secondary.main,
  color: theme.palette.secondary.main,
}));

export const StyledCancelIcon = styled(CancelIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));
export const StyledListItem = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${grey[500]}`,
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
}));
