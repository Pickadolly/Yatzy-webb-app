import React, { useContext, useReducer } from "react";
import { Box, ResponsiveContext, Button } from "grommet";

const initialState = {
  value: 0,
  sum: 0,
}

const reducer = (state, action) => {
  switch(action.type) {
    case "1": 
    return {...state, value: action.payload}
    default:
      return state;
  }
}



export const Dice1 = ({ locked }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const size = useContext(ResponsiveContext);

  return (
    <Button focusIndicator={false} disabled={locked} onClick={() => dispatch({ type: '1', payload: '1'})} >
      <Box
        size={size}
        width="xxsmall"
        height="xxsmall"
        border={{ color: "brand", size: "medium" }}
        pad="medium"
        round="xsmall"
        margin={{
          top: "small",
          left: "small",
          bottom: "xsmall",
          right: "small",
        }}
        background="light-4"
        responsive={true}
        align="center"
        justify="center"
      >
        <Box
          background="brand"
          round
          pad="4px"
          margin={{ top: "xsmall", bottom: "xsmall" }}
        />
      </Box>
  </Button>
  );
};

export const Dice2 = ({ locked }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const size = useContext(ResponsiveContext);

  return (
    <Button focusIndicator={false} disabled={locked} onClick={() => dispatch({ type: '1', payload: '2'})}>
      <Box
        size={size}
        width="xxsmall"
        height="xxsmall"
        border={{ color: "brand", size: "medium" }}
        pad="medium"
        round="xsmall"
        margin={{
          top: "small",
          left: "small",
          bottom: "xsmall",
          right: "small",
        }}
        background="light-4"
        responsive={true}
        align="center"
        justify="center"
        gap="xsmall"
      >
        <Box background="brand" round pad="4px" />
        <Box background="brand" round pad="4px" />
      </Box>
    </Button>
  );
};

export const Dice3 = ({ locked, handleClick }) => {
  const size = useContext(ResponsiveContext);

 
  return (
    <Button focusIndicator={false} disabled={locked} onClick={handleClick}>
      <Box
        size={size}
        width="xxsmall"
        height="xxsmall"
        border={{ color: "brand", size: "medium" }}
        pad="medium"
        round="xsmall"
        background="light-4"
        responsive={true}
        gap="xsmall"
        align="center"
        margin={{
          top: "small",
          left: "small",
          bottom: "xsmall",
          right: "small",
        }}
        justify="center"
      >
        <Box background="brand" round pad="4px" alignSelf="center" />
        <Box background="brand" round pad="4px" alignSelf="center" />
        <Box background="brand" round pad="4px" alignSelf="center" />
      </Box>
    </Button>
  );
};

export const Dice4 = ({ locked, handleClick }) => {
  const size = useContext(ResponsiveContext);



  return (
    <Button focusIndicator={false} disabled={locked} onClick={handleClick}>
      <Box
        size={size}
        width="xxsmall"
        height="xxsmall"
        border={{ color: "brand", size: "medium" }}
        pad="medium"
        round="xsmall"
        background="light-4"
        margin={{
          top: "small",
          left: "small",
          bottom: "xsmall",
          right: "small",
        }}
        responsive={true}
        gap="small"
        justify="center"
      >
        <Box
          align="center"
          direction="row"
          gap="small"
          justify="center"
          margin={{ bottom: "small" }}
        >
          <Box background="brand" round pad="4px" />
          <Box background="brand" round pad="4px" />
        </Box>
        <Box align="center" direction="row" gap="small" justify="center">
          <Box background="brand" round pad="4px" />
          <Box background="brand" round pad="4px" />
        </Box>
      </Box>
    </Button>
  );
};

export const Dice5 = ({ locked, handleClick }) => {
  const size = useContext(ResponsiveContext);


  return (
    <Button focusIndicator={false} disabled={locked} onClick={handleClick}>
      <Box
        size={size}
        width="xxsmall"
        height="xxsmall"
        border={{ color: "brand", size: "medium" }}
        pad="medium"
        round="xsmall"
        background="light-4"
        margin={{
          top: "small",
          left: "small",
          bottom: "xsmall",
          right: "small",
        }}
        responsive={true}
        gap="small"
        justify="center"
      >
        <Box align="center" direction="row" gap="small" justify="center">
          <Box background="brand" round pad="4px" />
          <Box background="brand" round pad="4px" />
        </Box>
        <Box align="center" direction="row" justify="center" gap="small">
          <Box background="brand" round pad="4px" />
        </Box>
        <Box align="center" direction="row" gap="small" justify="center">
          <Box background="brand" round pad="4px" />
          <Box background="brand" round pad="4px" />
        </Box>
      </Box>
    </Button>
  );
};

export const Dice6 = ({ locked, handleClick }) => {
  const size = useContext(ResponsiveContext);

 

  return (
    <Button focusIndicator={false} disabled={locked} onClick={handleClick}>
      <Box
        size={size}
        width="xxsmall"
        height="xxsmall"
        border={{ color: "brand", size: "medium" }}
        pad="medium"
        round="xsmall"
        background="light-4"
        margin={{
          top: "small",
          left: "small",
          bottom: "xsmall",
          right: "small",
        }}
        responsive={true}
        gap="small"
        justify="center"
      >
        <Box
          align="center"
          direction="row"
          gap="xsmall"
          justify="center"
          margin={{ bottom: "small" }}
        >
          <Box background="brand" round pad="4px" />
          <Box background="brand" round pad="4px" />
          <Box background="brand" round pad="4px" />
        </Box>
        <Box align="center" direction="row" gap="xsmall" justify="center">
          <Box background="brand" round pad="4px" />
          <Box background="brand" round pad="4px" />
          <Box background="brand" round pad="4px" />
        </Box>
      </Box>
    </Button>
  );
};
