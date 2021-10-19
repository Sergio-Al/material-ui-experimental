import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card() {
  const ref = useRef(null);
  const [transform, setTransform] = useState([0, 0, 1]);
  const props = useSpring({ transform });

  return (
    <div className="ccard-main" ref={ref}>
      <animated.div
        className="ccard"
        style={{ transform: props.transform.to(trans) }}
        onMouseLeave={() => setTransform([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          setTransform(calc(e.clientX, e.clientY, rect));
        }}
      >
        WTF IS THIS!
      </animated.div>
    </div>
  );
}
