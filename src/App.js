import React from "react";
import { ThemeProvider } from "styled-components";

import "./App.css";
import WebLayuot from "./_layout/WebLayout";
import Routes from "./_components/Routes";
import { Background } from "./_components/Styles";
import { LightTheme, DarkTheme } from "../src/_layout/Themes";


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Background>
        <WebLayuot>
          <Routes />
        </WebLayuot>
      </Background>
    </ThemeProvider>
  );
}

export default App;
