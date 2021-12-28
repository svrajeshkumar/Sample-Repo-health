import { styled } from "@mui/material";


export const StyledMainSection = styled("main")(({ theme }) => ({
  minHeight: `calc(100vh - 50px)`,
  paddingTop: "64px",
  [theme.breakpoints.only("xs")]: {
    minHeight: `calc(100vh - 50px)`,
    paddingTop: "92px",
  },
}));
