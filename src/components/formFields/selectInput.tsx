import { FC, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";

export type SelectChangeEvent<T = string> =
  | (Event & { target: { value: T; name: string } })
  | React.ChangeEvent<HTMLInputElement>;

const FormSelectInput: FC = () => {
  const [age, setAge] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="input-select-label">
        How did you hear about edgepark?
      </InputLabel>
      <Select
        labelId="input-select-label"
        id="input-select"
        value={age}
        label="How did you hear about edgepark?"
        onChange={handleChange}
      >
        <MenuItem value={10}>Select one...</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>Optional</FormHelperText>
    </FormControl>
  );
};
export default FormSelectInput;
