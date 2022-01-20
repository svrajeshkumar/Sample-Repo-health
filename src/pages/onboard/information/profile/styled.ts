import { styled, FormHelperText, Button, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { grey } from "@mui/material/colors";

interface radioButtonProps {
  content?: string;
}

export const StyledProfileWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "20px",
  [theme.breakpoints.up("sm")]: {
    width: `400px !important`,
  },
}));

export const StyledCaptionLbl = styled(FormHelperText)(({ theme }) => ({
  paddingLeft: 10,
  FontWeight: 700,
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

export const StyledRadioButton = styled("span")<radioButtonProps>(
  ({ theme, content }) => ({
    borderRadius: "5px",
    width: 150,
    height: 45,
    "&:before": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      fontSize: "14px",
      fontWeight: 600,
      justifyContent: "center",
      content: `'${content}'`,
      color: theme.palette.secondary.main,
    },
    border: `1px solid ${theme.palette.secondary.main}`,
    "input:hover ~ &": {
      backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
    },
  })
);

export const StyledCheckedRadio = styled(StyledRadioButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  "&:before": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    fontSize: "14px",
    fontWeight: 600,
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
}));
