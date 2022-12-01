import { createTheme } from "@mui/material/styles";

const Colors = {
  primary: "#00C6AE",
  secondary: "#1947E5",
  warning: "#FFBD12",
  danger: "#F95A2C",
  success: "#4CAF50",
  info: "#00a2ff",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    warning: {
      main: Colors.warning,
    },
    danger: {
      main: Colors.danger,
    },
    white: {
      main: Colors.white,
    },
    black: {
      main: Colors.black,
    },
    // mode: "dark",
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
    ].join(","),
  },

  components: {
    // MuiDialog: {
    //   defaultProps: {
    //     root: {
    //       margin: 30,
    //     },
    //   },
    // },
    MuiButton: {
      defaultProps: {
        disableRipple: false,
      },
    },
  },
});

export default theme;
