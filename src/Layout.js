import React from "react";
import { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Collapsible,
  Layer,
  ResponsiveContext
} from "grommet";
import { Gremlin, Close } from "grommet-icons";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <NavBar>
            <Heading level="3" margin="none">
              Hello, welcome to YATZY, let's play!
            </Heading>
            <Button
              icon={<Gremlin />}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </NavBar>
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              App body
            </Box>
            {!showSidebar || size !== "small" ? (
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                  flex
                  width="medium"
                  background="light-2"
                  elevation="small"
                  align="center"
                  justify="center"
                >
                  sidebar
                </Box>
              </Collapsible>
            ) : (
              <Layer>
                <Box
                  background="light-2"
                  tag="header"
                  justify="end"
                  align="center"
                  direction="row"
                >
                  <Button
                    icon={<Close />}
                    onClick={() => setShowSidebar(false)}
                  />
                </Box>
                <Box fill background="light-2" align="center" justify="center">
                  sidebar
                </Box>
              </Layer>
            )}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

const NavBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  ></Box>
);

export default Layout;
