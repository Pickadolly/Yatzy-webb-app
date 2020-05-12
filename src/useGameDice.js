import { useState, useMemo, useCallback, useEffect } from "react";

export const useGameDice = (initialNumberOfDice = 5, initialDiceValue = 1, initialRollsLeft = 0) => {
  const [diceValue, setDiceValue] = useState();
  const [clicked, setClicked] = useState(false);
  const [numberOfDice, setNumberOfDice] = useState(initialNumberOfDice);
  const [rollsLeft, setRollsLeft] = useState(initialRollsLeft);

  const initalDiceState = useMemo(
    () => Array(numberOfDice).fill(initialDiceValue),
    [numberOfDice, initialDiceValue]
  );


  const generateRandomDiceNumber = useCallback(() => {
    return Math.floor(Math.random() * 6) + 1;
  }, []);

  
  const resetDice = useCallback(() => {
    setDiceValue(initalDiceState);
    console.log(initalDiceState);
    setRollsLeft(initialRollsLeft);
    console.log(initialRollsLeft);
   
  }, [initalDiceState, initialRollsLeft]);

  const rollDice = useCallback(() => {
    const arrayConfig = { length: numberOfDice };
    const newDiceValues = Array.from(arrayConfig, generateRandomDiceNumber);
    setDiceValue(newDiceValues);
    setRollsLeft(rollsLeft + 1);
  }, [numberOfDice, generateRandomDiceNumber, rollsLeft]);

  

  useEffect(() => {
    setDiceValue(initalDiceState);
    setRollsLeft(initialRollsLeft);
  }, [initalDiceState, initialRollsLeft]);

  const state = {
    diceValue,
    numberOfDice,
    rollsLeft,
    clicked
  };

  const api = useMemo(
    () => ({
      setNumberOfDice,
      rollDice,
      resetDice
    }),
    [setNumberOfDice, rollDice, resetDice]
  );

  return [state, api];
};