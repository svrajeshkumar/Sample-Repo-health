import React, { ReactNode } from "react";
import { StyledMainSection } from "./styled";
import NavigationAppBar from "../../components/navigation";
// import FooterComponent from "../../components/footer";

interface defaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<defaultLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationAppBar />
      <StyledMainSection>{children}</StyledMainSection>
      {/* <FooterComponent /> */}
    </React.Fragment>
  );
};

export default DefaultLayout;
