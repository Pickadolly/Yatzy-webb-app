import React, { useState, useContext } from "react";
import {
  Collapsible,
  Button,
  Box,
  Heading,
  Paragraph,
  Markdown,
  ResponsiveContext
} from "grommet";

function Rules() {
  const [open, setOpen] = useState();
  const size = useContext(ResponsiveContext);

  return (
    <Box align="center" pad={{ top: "large", horizontal: "small" }} fill>
      <Box flex align="center" overflow="auto">
        <Box
          border={{ color: "brand", size: "medium" }}
          round="small"
          background="light-2"
        >
          <Heading textAlign="center" level="2" color="black">
            Yatzy rules
          </Heading>
          <Button
          alignSelf="center"
          primary={true}
          label="Click me!"
          onClick={() => setOpen(open ? false : true)}
        />
        <Collapsible directrion="vertical" open={open}>
            
          <Paragraph textAlign="start" color="black" size={size} responsive={true} margin="small">
            <Markdown>
              Each turn a player throw **5 dice** no more than **3 strokes**. 
              For each stroke the player decides which dice to keep and which 
              dice to throw again. After each players round, the score are 
              entered into the protocol. The protocol is divided into one upper 
              and one lower. Players **do not need to follow the protocol order.**
              If the player already has one of the possible combinations in the
              protocol, he or she can remove one category or sum the dice and
              choose to put it all in **Chance**.
            </Markdown>
          </Paragraph>
          <Paragraph textAlign="start" color="black" size={size} responsive={true} margin="small">
            <Markdown>
              Each category can only be used **once**. At any time you can get
              **Yatzy**, which means all of the **5 dice are of the same number.** 
              If the sum of your score is 63 point or more for the upper protocol
              you get a bonus of 50 points. 
            </Markdown>
          </Paragraph>
        </Collapsible>
        </Box>
      </Box>
    </Box>
  );
}

export default Rules;


