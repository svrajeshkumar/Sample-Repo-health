import React, { FC } from "react";
import { Typography, styled } from "@mui/material";

interface sectionH6Props {
  title: string;
}

const SeactionH6: FC<sectionH6Props> = ({ title }) => {
  const StyledSectionBody1 = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: "16px",
    fontWeight: 700,
  }));

  return <StyledSectionBody1 variant="h6">{title}</StyledSectionBody1>;
};
export default SeactionH6;
