import React, { useState } from "react";
import { Box, AppBar, Toolbar, Tab, Tabs, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ROUTES from "../../navigation/routes";
import logo from "../../assets/_logo.png";

interface navLinksProps {
  label: string;
  route: string;
}

const navLinks: navLinksProps[] = [
  { label: "How It Works", route: ROUTES.HOWITSWORK },
  { label: "Pricing", route: ROUTES.PRICING },
  { label: "Reviews", route: ROUTES.REVIEWS },
  { label: "Sign Up", route: ROUTES.SIGNUPSCREEN },
];

const AppBarComponent: React.FC = () => {
  const navigate = useNavigate();
  const paramns = useParams();
  const [tabIndex, setTabIndex] = useState<Number | boolean>(false);

  const StylesAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.divider}`,
  }));

  const StyledTab = styled(Tab)(() => ({
    minHeight: 64,
    textTransform: "none",
    fontWeight: 600,
  }));
  const navigateTo = (link) => {
    navigate(link);
  };

  React.useEffect(() => {
    switch (window.location.pathname) {
      case "/how-its-work":
        setTabIndex(0);
        break;
      case "/pricing":
        setTabIndex(1);
        break;
      case "/review":
        setTabIndex(2);
        break;
      case "/sign-up":
        setTabIndex(3);
        break;
      default:
        setTabIndex(false);
    }
  }, [paramns]);

  return (
    <StylesAppBar color="primary" elevation={0} position="static">
      <Toolbar>
        <Box>
          <img
            onClick={() => {
              navigate(ROUTES.HOMESCREEN);
            }}
            width={90}
            alt="digital-pharmacy"
            src={logo}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <Tabs value={tabIndex} onChange={(_, value) => setTabIndex(value)}>
            {navLinks.map((link, index) => (
              <StyledTab
                onClick={() => {
                  navigateTo(link.route);
                }}
                key={index}
                label={link.label}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </StylesAppBar>
  );
};

export default AppBarComponent;
