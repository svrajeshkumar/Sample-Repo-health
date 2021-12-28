import { styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const StyledMainContainerBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "40px 20px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "40px 175px",
  },
}));

export const StyledMainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.secondary.main,
  marginBottom: 20,
  [theme.breakpoints.up("sm")]: {
    fontSize: 40,
  },
}));

export const StyledActionCard = styled(Box)(({ theme }) => ({
  height: 125,
  border: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.up("sm")]: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 20,
  },
  borderRadius: 9,
  backgroundColor: grey[50],
}));

export const StyledActionCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  marginTop: 10,
  [theme.breakpoints.up("sm")]: {
    fontSize: 16,
  },
}));

export const StyledButtonBox = styled(Box)(({ theme }) => ({
  marginTop: 42,
  marginBottom: 42,
  [theme.breakpoints.only("xs")]: {
    display: "flex",
    aliginItems: "center",
    justifyContent: "center",
  },
}));

export const StyledAnchorLink = styled(Box)(({ theme }) => ({
  fontSize: 18,
  textDecoration: "underline",
  color: theme.palette.secondary.main,
  lineHeight: "25px",
  marginBottom: 10,
}));

export const StyledSearchWrapper = styled(Box)(({ theme }) => ({
  marginTop: "40px",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
  },
  [theme.breakpoints.up("sm")]: {
    width: "60%",
  },
}));

export const StyledActionCardIcon = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: 30,
  },
}));
