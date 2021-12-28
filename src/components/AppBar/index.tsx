import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/icons/menu.png";
import Box from "@mui/material/Box";

import {
  StyledAppBar,
  StyledElemtsBox,
  StyledCartIcon,
  StyledBadgeIcon,
  MenuIconWrapper,
  StyledAvatar,
  StyledNavSearch,
} from "./styled";
import SearchInputComponent from "../searchInput";

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const AppBarComponent: React.FC = () => {
  return (
    <StyledAppBar color="primary" elevation={0} position="fixed">
      <Toolbar>
        <MenuIconWrapper>
          <IconButton>
            <img width={35} src={MenuIcon} alt="menu-icon" />
          </IconButton>
        </MenuIconWrapper>
        <StyledElemtsBox>
          <img width={150} src={Logo} alt="logo" />
          <StyledNavSearch>
            <SearchInputComponent placeholder="Search..." />
          </StyledNavSearch>
        </StyledElemtsBox>
        <StyledAvatar {...stringAvatar("Kent Dodds")} />
        <StyledCartIcon>
          <IconButton>
            <ShoppingCartIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
          <StyledBadgeIcon>
            <span>10</span>
          </StyledBadgeIcon>
        </StyledCartIcon>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBarComponent;
