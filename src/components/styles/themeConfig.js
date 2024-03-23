import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#292929",
    },
    secondary: {
      main: "#dcdcdc",
      dark: "#3d3d3d",
    },
    third: {
      dark: "#464646",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
