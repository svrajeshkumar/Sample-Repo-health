import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: 50,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: grey[50],
  padding: 24,
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    paddingLeft: 150,
    paddingRight: 150,
  },
}));

export const StyledMainTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
}));

export const StyledInfoContent = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

export const StyledCopyright = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  color: grey[600],
}));

export const StyledNavLinkBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: 24,
  width: "100%",
}));

export const StyledAnchorLink = styled("a")(({ theme }) => ({
  color: theme.palette.common.white,
  letterSpacing: "0.24px",
  textDecoration: "underline",
  fontSize: 12,
  lineHeight: "19px",
}));

export const StyledFooterLeftContainer = styled(Box)(({ theme }) => ({
  flex: 1,
}));
export const StyledFooterRightContainer = styled(Box)(({ theme }) => ({
  flex: 1,
}));
