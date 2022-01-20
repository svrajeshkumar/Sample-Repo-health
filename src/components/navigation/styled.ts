import { AppBar, styled } from "@mui/material";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: grey[50],
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.up("md")]: {
    paddingLeft: 84,
    paddingRight: 84,
  },
}));

export const StyledElemtsBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.only("xs")]: {
    alignItems: "center",
    justifyContent: "center",
    height: 92,
  },
}));

export const StyledCartIcon = styled(Box)(({ theme }) => ({
  height: 40,
  width: 40,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "100px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledBadgeIcon = styled(Box)(({ theme }) => ({
  height: 20,
  width: 20,
  top: 0,
  right: -8,
  backgroundColor: theme.palette.error.main,
  border: `2px solid ${theme.palette.common.white}`,
  borderRadius: "100px",
  position: "absolute",
  fontSize: 9,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
}));

export const MenuIconWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginRight: "64px",
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  background: theme.palette.primary.main,
  marginRight: "15px",
  fontSize: "18px",
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));

export const StyledNavSearch = styled(Box)(({ theme }) => ({
  marginLeft: "60px",
  width: "60%",
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));
