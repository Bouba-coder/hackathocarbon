import { createTheme } from "@mui/material/styles";

export const greyCarbon = "#282B2A";
export const whiteCarbon = "#FDFDFD";
export const redCarbon = "#E53F49";
export const greenCarbon = "#00BB7E";
export const blueCarbon = "#5B98D2";

export const font = createTheme({
  typography: {
    fontFamily: "Calibri",
  },
});

export const themeNav = createTheme({
  palette: {
    primary: {
      main: greyCarbon,
    },
  },
});

export const themeNavItem = createTheme({
  Typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: greenCarbon,
    },
    text: {
      main: whiteCarbon,
    },
  },
});

export const themeLogin = createTheme({
  Typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: greyCarbon,
    },
  },
});

export const themeHome = createTheme({
  palette: {
    mode: "dark",
    divider: blueCarbon,
    background: {
      default: greyCarbon,
      paper: greyCarbon,
    },
    text: {
      primary: whiteCarbon,
      secondary: greenCarbon,
    },
  },
});

export const themeCardContainer = createTheme({
  palette: {
    background: {
      default: greyCarbon,
    },
    text: {
      primary: whiteCarbon,
      secondary: greenCarbon,
    },
  },
});