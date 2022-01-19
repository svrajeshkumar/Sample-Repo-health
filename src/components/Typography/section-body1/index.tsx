import React, { FC } from "react";
import { Typography, styled } from "@mui/material";

interface sectionPProps {
  title: string;
}

const SeactionBody1: FC<sectionPProps> = ({ title }) => {
  const StyledSectionBody1 = styled(Typography)(({ theme }) => ({
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  }));

  return <StyledSectionBody1 variant="body1">{title}</StyledSectionBody1>;
};
export default SeactionBody1;
