import React from "./node_modules/react";
import { Box, Grid, ResponsiveContext } from "./node_modules/grommet";

const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grid areas={areas[size]} {...props} alignContent="center">
      {children}
    </Grid>
  );
};

export const GridLayout = () => {
  return (
    <ResponsiveGrid
      fill
      columns={["35%", "60%", "20%"]}
      rows={["3em", "18em", "18em"]}
      margin={{ top: "5em", left: "10px" }}
      areas={{
        xsmall: [
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "one", start: [0, 1], end: [0, 1] },
          { name: "two", start: [1, 1], end: [1, 1] }
        ],
        small: [
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "one", start: [0, 1], end: [0, 1] },
          { name: "two", start: [1, 1], end: [1, 1] }
        ],
        medium: [
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "one", start: [0, 1], end: [0, 1] },
          { name: "two", start: [1, 1], end: [1, 1] }
        ],
        middle: [
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "one", start: [0, 1], end: [0, 1] },
          { name: "two", start: [1, 1], end: [1, 1] }
        ]
      }}
    >
      <Box gridArea="header" background="brand"></Box>
      <Box gridArea="one" background="light-5"></Box>
      <Box gridArea="two" background="light-2"></Box>
    </ResponsiveGrid>
  );
};


