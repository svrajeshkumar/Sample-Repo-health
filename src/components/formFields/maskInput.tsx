import MaskedInput from "react-text-mask";
const maskPattren = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];



const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={maskPattren}
      placeholderChar={"\u2000"}
      guide
      keepCharPositions
    />
  );
};

export default TextMaskCustom;
