import { styled, alpha } from "@mui/material";
import { grey } from "@mui/material/colors";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export const StyledSearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  border: `1px solid ${grey[500]}`,
  borderRadius: theme.shape.borderRadius,
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  height: 40,
  paddingLeft: 50,
}));

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
