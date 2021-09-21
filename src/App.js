import React from "react";
import "./App.css";
import WebLayuot from "./_layout/WebLayout";
import Routes from "./_components/Routes";
import { Background } from "./_components/Styles";
import { BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
<Router>
      <Background>
        <WebLayuot>
          <Routes />
        </WebLayuot>
      </Background>
      </Router>
  );
}

export default App;
