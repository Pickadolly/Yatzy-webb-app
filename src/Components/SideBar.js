import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CircleQuestion, Gremlin, Risk } from "grommet-icons";
import { Box, ResponsiveContext } from "grommet";
import StyledButton from "./StyledButton";

function SideBar() {
  const size = useContext(ResponsiveContext);
  const [hover, setHover] = useState();

  return (
    <Box fill="vertical" width="xxsmall" background="brand" elevation="medium">
      <Box
        flex={false}
        alignt="center"
        gap="xsmall"
        pad={{ vertical: "small" }}
      ></Box>
      <Box flex overflow="auto">
        <Box
          pad={{ vertical: "small" }}
          gap="xsmall"
          align="center"
          justify="center"
        >
          <Box align="center" gap={size === "small" ? "medium" : "small"}>
            <Link to="/">
              <StyledButton
                icon={
                  <Gremlin
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    color={hover ? "black" : "white"}
                  />
                }
                iconName="Home"
              />
            </Link>
            <Link to="/rules">
              <StyledButton
                icon={
                  <CircleQuestion
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    color={hover ? "black" : "white"}
                  />
                }
                iconName="Rules"
              />
            </Link>
            <Link to="/startgame">
              <StyledButton
                icon={
                  <Risk
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                    color={hover ? "black" : "white"}
                  />
                }
                iconName="Start"
              />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box flex />
    </Box>
  );
}

export default SideBar;

//s'tt varje button i en box!!!

