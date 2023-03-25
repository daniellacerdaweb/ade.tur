import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

interface Provider {
  children: React.ReactNode;
}

export const MUIProvider = ({ children }: Provider) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
