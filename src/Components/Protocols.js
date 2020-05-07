import React, { useState, useContext, useEffect } from "react";
import { Text, Box, ResponsiveContext, Button, Grommet } from "grommet";
import { grommet } from "grommet/themes";

export function DisplayUpperScores() {
  const [scoreItems, setScoreItems] = useState([
    "Ones",
    "Twos",
    "Threes",
    "Fours",
    "Fives",
    "Sixes"
  ]);

  const size = useContext(ResponsiveContext);

  const selectScore = index => {
    setScoreItems(
      scoreItems.filter((item, currentIndex) => currentIndex !== index)
    );
  };

  return (
    <Box flex align="start" overflow="auto" size={size} responsive={true}>
      <Text margin={{ bottom: "xsmall", left: "small" }} color="black" weight="bold">
        Upper Score
      </Text>
      {scoreItems.map((item, index) => {
          return (
              <Box align="center" size={size} responsive={true}
              key={index}>
                <Button
                  key={index}
                  as="button"
                  onClick={() => selectScore(index)}
                  label={item}
                  margin={{ bottom: "small", left: "small" }}
                  hoverIndicator={{ color: "accent-1" }}
                  >
                    <Box pad="small" direction="column" alignt="center" gap="small" key={index}/>
                    </Button>
              </Box>
          );
        })}
    </Box>
  );
}

export function DisplayLowerScores() {
  const [scoreItems, setScoreItems] = useState([
    "3 of a kind",
    "4 of a kind",
    "Full House",
    "Small Straight",
    "Large Straight",
    "Yatzy",
    "Chance"
  ]);

  const size = useContext(ResponsiveContext);

  const selectScore = index => {
    setScoreItems(
      scoreItems.filter((item, currentIndex) => currentIndex !== index)
    );
  };

  return (
    <Box flex align="start" overflow="auto" size={size} responsive={true}>
      <Text margin={{ bottom: "xsmall", right: "small" }} alignSelf="end" color="black" weight="bold">
        Lower Score
      </Text>
      {scoreItems.map((item, index) => {
          return (
              <Box alignSelf="end" size={size} responsive={true} key={index}>
                <Button
                key={index}
                  as="button"
                  onClick={() => selectScore(index)}
                  label={item}
                  margin={{ bottom: "small", right: "small" }}
                  hoverIndicator={{ color: "accent-1" }}
                  >
                    <Box pad="small" direction="column" alignt="center" gap="small"key={index} />
                    </Button>
              </Box>
          );
        })}
    </Box>
  )
}


