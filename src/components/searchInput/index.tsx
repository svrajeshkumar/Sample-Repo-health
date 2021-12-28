import { FC } from "react";
import {
  StyledSearchWrapper,
  SearchIconWrapper,
  StyledInputBase,
  StyledSearchIcon,
} from "./styled";
import { InputBaseComponentProps } from "@mui/material";

interface searchInputComponentProps {
  placeholder?: string;
  inputProps?: InputBaseComponentProps;
}

const SearchInputComponent: FC<searchInputComponentProps> = ({
  placeholder,
  inputProps,
}) => {
  return (
    <StyledSearchWrapper>
      <SearchIconWrapper>
        <StyledSearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder={placeholder} inputProps={inputProps} />
    </StyledSearchWrapper>
  );
};

export default SearchInputComponent;
