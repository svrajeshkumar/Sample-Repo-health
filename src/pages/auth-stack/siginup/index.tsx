import { FC } from "react";
import Box from "@mui/material/Box";
import SignupForm from "../../../containers/forms/signup-form";

const SiginupScreen: FC = () => {
  return (
    <Box sx={{ paddingTop: "92px" }}>
      <SignupForm />
    </Box>
  );
};

export default SiginupScreen;
