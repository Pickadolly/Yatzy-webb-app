import React from "react";
import { DataTable, Box, Meter, Text } from "grommet";

function DisplayData() {
  return (
    <DataTable

      margin={{ top: "large", right: "900px" }}
      columns={[
        {
          property: "player",
          header: <Text>Player</Text>,
          primary: true
        },
        {
          property: "percent",
          header: "Score",
          render: datum => (
            <Box round={{ size: "small" }} pad={{ vertical: "xsmall" }}>
              <Meter
                values={[{ value: datum.percent }]}
                thickness="small"
                size="small"
              />
            </Box>
          )
        }
      ]}
      data={[
        { player: "Alan", percent: 20 },
        { player: "Bryan", percent: 30 },
        { player: "Chris", percent: 40 },
        { player: "Eric", percent: 80 }
      ]}
    />
  );
}

export default DisplayData;
