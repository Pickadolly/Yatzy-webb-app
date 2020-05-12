import React from "react";
import { Box, Heading, Markdown, Paragraph, Text } from "grommet";
import { Reactjs, Grommet as GrommetIcon } from "grommet-icons";

function Dashboard() {
  return (
    <Box 
    align="center" 
    pad={{ top: "large", horizontal: "small" }} 
    fill
    background="light-1"
    >
      <Box flex align="center" overflow="auto" >
        <Box 
        elevation="large"
        border={{ color: "#F335A2", size: "medium" }} 
        round="small"
        background="#6A898E"
        width="45rem"
        height="35rem"
        >
        <Heading textAlign="center" level="2" color="white">
          Welcome to <Text size="2rem" color="#60F6AD">YATZY!</Text>
        </Heading>
        <Paragraph textAlign="center" color="white">
          <Markdown>
            So this is what you need to do before we get started! Click on the
            button with a **?** to read the **rules**. When you are done reading
            the rules just click the button with the **dice** and you are ready
            to start **YATZY!**
          </Markdown>
        </Paragraph>
        <Paragraph textAlign="center" color="white">
          <Markdown>
          This app was created with **React** and **Grommet**
          </Markdown>
        </Paragraph>
        <Paragraph textAlign="center">
        <Reactjs align="center" color="#61dbfb" size="large"/>  <GrommetIcon align="center" color="brand" size="large"/>
        </Paragraph>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
