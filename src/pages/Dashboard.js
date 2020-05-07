import React from "react";
import { Box, Heading, Markdown, Paragraph } from "grommet";
import { Gremlin } from "../components/Gremlin";
import { Reactjs, Grommet as GrommetIcon } from "grommet-icons";

function Dashboard() {
  return (
    <Box 
    align="center" 
    pad={{ top: "large", horizontal: "small" }} 
    fill
    >
      <Box flex align="center" overflow="auto" >
        <Box 
        border={{ color: "brand", size: "medium" }} 
        round="small"
        background="light-2"
        >
        <Heading textAlign="center" level="2" color="black">
          Welcome to YATZY!
        </Heading>
        <Paragraph textAlign="center" color="black">
          <Markdown>
            So this is what you need to do before we get started! Click on the
            button with a **?** to read the **rules**. When you are done reading
            the rules just click the button with the **dice** and you are ready
            to start **YATZY!**
          </Markdown>
        </Paragraph>
        <Paragraph textAlign="center" color="black">
          <Markdown>
          This app was created with **React** and **Grommet**
          </Markdown>
        </Paragraph>
        <Paragraph textAlign="center">
        <Reactjs align="center" color="#61dbfb" size="large"/>  <GrommetIcon align="center" color="brand" size="large"/>
        </Paragraph>
        </Box>
      </Box>
      <Gremlin />
    </Box>
  );
}

export default Dashboard;
