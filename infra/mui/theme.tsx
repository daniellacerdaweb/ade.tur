import { createTheme } from "@mui/material";


export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#364152",
        },
      },
    },
  },
  palette: {
    background: {
      default: "#eef2f6",
    },
    primary: {
      main: "#F62079",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1260,
      xl: 1536,
    },
    unit: "px",
  },
});
