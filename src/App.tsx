import WebPlayer from "./pages/WebPlayer";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      // primary: {
      //   main: "#ff0000",
      // },
      background: {
        // default: "#ff0000",
        paper: "#1a1515",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <WebPlayer />
    </ThemeProvider>
  );
}
