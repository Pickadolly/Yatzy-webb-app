import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Grommet, Box, Button } from "grommet";

import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";
import Rules from "./pages/Rules";
import StartGame from "./pages/StartGame";


function App() {
  return (
    <Router>
      <Grommet theme={theme} themeMode="dark" full>
        <Box direction="row" fill>
          <SideBar />
          <Box flex>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/rules" component={Rules} />
              <Route path="/startgame" component={StartGame} />
            </Switch>
          </Box>
        </Box>
      </Grommet>
    </Router>
  );
}



const theme = {
  global: {
    colors: {
      brand: "#7D4CDB",
      font: "#241A2A"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
      color: "#241A2A"
    }
  }
};

export default App;
