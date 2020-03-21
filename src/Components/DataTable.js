import React from "react";
import { DataTable, Box, Meter } from "grommet";

function DataTable() {
  return (
    <DataTable
      columns={[
        {
          property: "name",
          header: <Text>Name</Text>,
          primary: true
        },
        {
          property: "percent",
          header: "Complete",
          render: datum => (
            <Box pad={{ vertical: "xsmall" }}>
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
        { name: "Alan", percent: 20 },
        { name: "Bryan", percent: 30 },
        { name: "Chris", percent: 40 },
        { name: "Eric", percent: 80 }
      ]}
    />
  );
}

export default DataTable;
