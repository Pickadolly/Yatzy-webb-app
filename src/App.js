import React from "react";
import { Grommet } from "grommet";
import Layout from "./Layout";


function App() {
  return (
  <Grommet theme={theme} themeMode="dark" full>
    <Layout />
  </Grommet>
  )
}

const theme = {
  global: {
    colors: {
      brand: "#FF80EA"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

export default App;
