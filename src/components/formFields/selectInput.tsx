import { FC, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";

interface formSelectInputProps {
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
  value: string;
}

const FormSelectInput: FC<formSelectInputProps> = ({ onChange, value }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="input-select-label">
        How did you hear about edgepark?
      </InputLabel>
      <Select
        labelId="input-select-label"
        id="input-select"
        value={value}
        label="How did you hear about edgepark?"
        onChange={onChange}
      >
        <MenuItem value={`google`}>Google</MenuItem>
        <MenuItem value={`facebook`}>Facebook</MenuItem>
      </Select>
      <FormHelperText>Optional</FormHelperText>
    </FormControl>
  );
};
export default FormSelectInput;
