import { createTheme } from "@mui/material/styles";

export const greyCarbon = "#282B2A";
export const whiteCarbon = "#FDFDFD";
export const redCarbon = "#E53F49";
export const greenCarbon = "#00BB7E";
export const blueCarbon = "#5B98D2";

export const themeNav = createTheme({
  palette: {
    primary: {
      main: greyCarbon,
    },
  },
});

export const themeNavItem = createTheme({
  palette: {
    primary: {
      main: greenCarbon,
    },
    text: {
      main: whiteCarbon,
    },
  },
});
