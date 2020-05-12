import React, { useRef, useState } from "react";
import { Box, Button, Drop } from "grommet";


function StyledButton({ iconName, icon, ...rest }) {
  const [over, setOver] = useState();
  const ref = useRef();

  const hoverColor = { color: "#F335A2", opacity: 0.9 };

  return (
    <Box width="100%">
      <Button
      focusIndicator={false}
        icon={icon}
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        fill="horizontal"
        hoverIndicator={hoverColor}
        pad={{ vertical: "small" }}
        align="center"
      >
        
      </Button>
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            animation="slideRight"
            margin="xsmall"
            pad="small"
            background={hoverColor}
            round={{ size: "medium", corner: "right" }}
          >
            {iconName}
          </Box>
        </Drop>
      )}
    </Box>
  );
}

export default StyledButton;


