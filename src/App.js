import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Grommet, Box } from "grommet";
import { CircleQuestion, Risk, Gremlin } from "grommet-icons";
import Dashboard from "./Components/Dashboard";
import Rules from "./Components/Rules";
import StartGame from "./Components/StartGame";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <Router>
      <Grommet theme={theme} themeMode="dark" full>
        <Box direction="row" fill>
          <SideBar
            appIcon={<Gremlin />}
            color="brand"
            appName="YATZY"
            items={items}
          />
          <Box flex>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/rules" component={Rules} />
              <Route exact path="/startgame" component={StartGame} />
            </Switch>
          </Box>
        </Box>
      </Grommet>
    </Router>
  );
}

const items = [
  {
    label: "home",
    Icon: Gremlin
  },
  {
    label: "rules",
    Icon: CircleQuestion
  },
  {
    label: "startgame",
    Icon: Risk
  }
];

const theme = {
  global: {
    colors: {
      brand: "#7D4CDB",
      font: "#6FFFB0"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

export default App;
