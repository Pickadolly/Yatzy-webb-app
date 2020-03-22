import React from "react";
import { Grommet } from "grommet";
import Layout from "./Components/Layout";


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
      brand: "#7D4CDB",
      font: "#6FFFB0"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    }
  }
};

export default App;
