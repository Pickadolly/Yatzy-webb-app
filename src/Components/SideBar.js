import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CircleQuestion, Gremlin, Risk } from "grommet-icons";
import { Box, Text, Button, ResponsiveContext } from "grommet";
import SpecialButton from "./SpecialButton";

function SideBar(props) {
  const size = useContext(ResponsiveContext);
  return (
    <Box fill="vertical" width="xxsmall" background="brand" elevation="medium">
      <Box
        flex={false}
        alignt="center"
        gap="xsmall"
        pad={{ vertical: "small" }}
      ></Box>
      <Box flex overflow="auto">
        <Box align="center" gap={size === "small" ? "medium" : "small"}>
          {["Gremlin", "CircleQuestion", "Risk"].map((iconName, index) => (
            <SpecialButton key={iconName} iconName={iconName} index={index} />
          ))}
        </Box>
        <Box flex />
      </Box>
    </Box>
  );
}

export default SideBar;

/* <Box flex overflow="auto">
          <Box pad={{ vertical: "small"}}
          gap="xsmall"
          align="center"
          justify="center">
          <Link to="/">
          <Button 
            icon={<Gremlin size="medium" color="light-5"/>}
          />
          </Link>
          <Link to="/rules">
          <Button 
          icon={<CircleQuestion size="medium" color="light-5"/>}
          />
          </Link>
          <Link to="/startgame">
          <Button 
          icon={<Risk size="medium" color="light-5"/>}
          />
          </Link>
          </Box>
          */
