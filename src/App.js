import React from "react";
import { ThemeProvider } from "styled-components";

import "./App.css";
import WebLayuot from "./_layout/WebLayout";
import Routes from "./_components/Routes";
import { Background } from "./_components/Styles";



function App() {
  return (
    
      <Background>
        <WebLayuot>
          <Routes />
        </WebLayuot>
      </Background>
    
  );
}

export default App;
