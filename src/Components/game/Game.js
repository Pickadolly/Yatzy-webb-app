import React, { useContext, useCallback } from "react";
import { Box, Heading, ResponsiveContext, Button } from "grommet";
import { useGameDice } from "./../../useGameDice";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "./../dice/Dice";

import { DisplayUpperScores, DisplayLowerScores } from "../Protocols";

function GameLayout() {
  const [state, api] = useGameDice(5);
  const { diceValue, numberOfDice } = state;

  const size = useContext(ResponsiveContext);

  const getDiceClassName = useCallback((value) => {
    switch (value) {
      case 1:
        return <Dice1 />;
      case 2:
        return <Dice2 />;
      case 3:
        return <Dice3 />;
      case 4:
        return <Dice4 />;
      case 5:
        return <Dice5 />;
      default:
        return <Dice6 />;
    }
  }, []);

  const handleNumberOfDiceClick = useCallback(
    (event) => {
      const { value } = event.currentTarget || event.srcElement;
      const numValue = value && parseInt(value);
      numValue && api.setNumberOfDice(numValue);
    },
    [api]
  );

  return (
    <Box align="center" pad={{ top: "large", horizontal: "small" }} fill>
      <Box flex align="center" overflow="auto" size={size}>
        <Box
          border={{ color: "brand", size: "medium" }}
          round="small"
          background="light-2"
          size={size}
          responsive={true}
        >
          <Heading textAlign="center" level="2" color="black">
            YATZY!
          </Heading>
          <Box direction="row" justify="between" size={size} responsive={true}>
            {diceValue &&
              diceValue.map((value, index) => (
                <Box key={index}>{getDiceClassName(value)}</Box>
              ))}
          </Box>
          <Button
            label="Roll Dice"
            onClick={api.rollDice}
            size={size}
            margin={{
              top: "small",
              bottom: "small",
            }}
            responsive={true}
            alignSelf="center"
            hoverIndicator={{ color: "accent-1" }}
            primary={true}
          />
          <Box align="center"></Box>
          <Box
            direction="row"
            justify="start"
            size={size}
            responsive={true}
            margin={{ bottom: "medium" }}
          ></Box>

          <Box
            responsive={true}
            size={size}
            align="start"
            direction="row"
            justify="between"
          >
            <DisplayUpperScores />
            <DisplayLowerScores />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GameLayout;
