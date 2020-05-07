import React, { useContext } from "react";
import { Box, ResponsiveContext, Button } from "grommet";

export const Dice1 = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Button focusIndicator={false}>
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

export const Dice2 = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Button focusIndicator={false}>
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

export const Dice3 = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Button focusIndicator={false}>
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

export const Dice4 = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Button focusIndicator={false}>
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

export const Dice5 = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Button focusIndicator={false}>
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

export const Dice6 = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Button focusIndicator={false}>
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
