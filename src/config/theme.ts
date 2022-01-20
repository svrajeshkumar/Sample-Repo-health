import { createTheme, responsiveFontSizes } from "@mui/material/styles";

enum colors {
  EDGEPARK_GREEN = "#50984D",
  EDGEPARK_GREEN_BLUE = "#117D9C",
}

let themeUtils = createTheme({
  shape: {
    borderRadius: 7,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: colors.EDGEPARK_GREEN_BLUE,
    },
    secondary: {
      main: colors.EDGEPARK_GREEN,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: themeUtils.shape.borderRadius,
          height: 40,
          textTransform: "none",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
