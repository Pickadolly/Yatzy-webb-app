import React from "./node_modules/react";
import { useState } from "./node_modules/react";
import {
  Box,
  Heading,
  Button,
  ResponsiveContext,
  Collapsible,
  Layer,
  Main
} from "./node_modules/grommet";
import { Gremlin, FormClose } from "./node_modules/grommet-icons";
import GridLayout from "./GridLayout";

function Layout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box fill 
       
        >
          <NavBar>
            <Heading level="3" margin="none" color="#6FFFB0">
              Hello, welcome to YATZY, let's play!
            </Heading>
            <Button
              icon={<Gremlin size="large" color="#6FFFB0" />}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </NavBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }} alignContent="center">
            <Main overflow="hidden">
              <GridLayout />
              </Main>
         
            {!showSidebar || size !== "small" ? (
              <Collapsible direction="horizontal" open={showSidebar} siz>
                <Box
                  flex
                  width="small"
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
                    icon={<FormClose />}
                    onClick={() => setShowSidebar(false)}
                  />
                </Box>
                <Box
                  fill
                  background="light-2"
                  align="center"
                  justify="center"
                >
            
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
