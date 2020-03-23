import React, { useRef, useState } from 'react';
import { Box, Button, Drop } from "grommet";
import { Risk, CircleQuestion, Gremlin } from "grommet-icons";

const SpecialButton = ({ iconName, index }) => {
    const [over, setOver] = useState();
    const iconsMap = color => [
        <Gremlin color={color} />,
        <CircleQuestion color={color} />,
        <Risk color={color} />
    ];
    const specialTip = { color: "accent-1", opacity: 0.9 };
    const ref = useRef();
    return (
        <Box width="100%">
            <Button 
            ref={ref}
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
            fill="horizontal"
            hoverIndicator={specialTip}
            plain
            path="/"
            >
                {({ hover }) => (
                    <Box pad={{vertical: "small"}} align="center">
                        {iconsMap(hover ? "black" : "white")[index]}
                    </Box>
                )}
            </Button>
            {ref.current && over && (
                <Drop align={{left: "right"}} target={ref.current} plain>
                    <Box
                    animation="slideRight"
                    margin="xsmall"
                    pad="small"
                    background={specialTip}
                    round={{size: "medium", corner: "right"}}
                    >
                        {iconName}
                    </Box>
                </Drop>
            )}
        </Box>
    )
}

export default SpecialButton;