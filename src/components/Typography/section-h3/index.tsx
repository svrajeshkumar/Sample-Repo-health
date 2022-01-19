import React, { FC } from "react";
import { Typography, styled } from "@mui/material";

interface sectionH3Props {
  title: string;
}

const SeactionH1: FC<sectionH3Props> = ({ title }) => {
  const StyledTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: "40px",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  }));

  return <StyledTitle variant="h3">{title}</StyledTitle>;
};
export default SeactionH1;
