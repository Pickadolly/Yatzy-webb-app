import React from "react";
import { Box, Heading, Markdown, Paragraph } from "grommet";
import { Gremlin } from "./Gremlin";

function Dashboard() {
  return (
    <Box align="center" pad={{ top: "large", horizontal: "small" }} fill>
      <Box flex align="center" overflow="auto">
        <Heading textAlign="center" level="2">
          Welcome to Gremlin YATZY!
        </Heading>
        <Paragraph textAlign="center" color="dark-5">
          <Markdown>
            So this is what you need to do before we get started! Click on the
            button thats say's `Rules` to read how a game of Yatzy works. When
            you are done just click the button `Start Game` and we are ready to
            goooo!
          </Markdown>
        </Paragraph>
        <Paragraph textAlign="center" color="dark-5">
          This app was created with React and Grommet!
        </Paragraph>
      </Box>
      <Gremlin />
    </Box>
  );
}

export default Dashboard;
