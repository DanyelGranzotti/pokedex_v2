import { useState, useEffect } from "react";
import { lightTheme, darkTheme } from "./styles/themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { Button } from "./components/atoms/Button";
import Home from "./components/pages/Home";

function App() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(true);
  const theme = isDarkModeEnabled ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
