import { styled } from "@mui/material";

export const StyledMainSection = styled("main")(({ theme }) => ({
  minHeight: `calc(100vh - 50px)`,
  [theme.breakpoints.down("sm")]: {
    padding: "40px 20px",
    paddingTop: "92px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "118px",
    paddingRight: "118px",
    paddingTop: "64px",
    paddingBottom: "20px",
  },
}));
