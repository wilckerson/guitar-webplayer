import React from "react";
import HttpsRedirect from "react-https-redirect";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WebPlayer from "./pages/WebPlayer";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#ff7f50",
      },
      background: {
        // default: "#ff0000",
        paper: "#1a1515",
      },
    },
  });

  return (
    // <HttpsRedirect>
    <ThemeProvider theme={darkTheme}>
      <WebPlayer />
    </ThemeProvider>
    // </HttpsRedirect>
  );
}
