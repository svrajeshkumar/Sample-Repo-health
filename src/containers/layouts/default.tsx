import React, { ReactNode } from "react";
import { StyledMainSection } from "./styled";
import AppBarComponent from "../../components/AppBar";
import FooterComponent from "../../components/footer";

interface defaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<defaultLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <AppBarComponent />
      <StyledMainSection>{children}</StyledMainSection>
      <FooterComponent />
    </React.Fragment>
  );
};

export default DefaultLayout;
