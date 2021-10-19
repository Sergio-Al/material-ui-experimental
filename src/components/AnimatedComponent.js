import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Box from "@mui/material/Box";
import CardComponent from "./CardComponent";

const AnimatedComponent = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <div className="animated-component">
      <div className="animated-component-card">
        <animated.h1 className="animated-comp" style={props}>
          <Box
            className="animated-component-title"
            sx={{ color: "primary.main" }}
          >
            primary.main
          </Box>
        </animated.h1>
        <CardComponent />
      </div>
    </div>
  );
};

export default AnimatedComponent;
