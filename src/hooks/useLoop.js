import { useState, useEffect } from "react";

const useLoop = ({ tickMs, tickCount, initialTick = 0 }) => {
  const [position, setPosition] = useState(initialTick);

  useEffect(() => {
    const loop = window.setInterval(() => {
      if (position < tickCount - 1) {
        setPosition(position + 1);
      } else {
        setPosition(initialTick);
      }
    }, tickMs);

    return () => {
      window.clearInterval(loop);
    };
  });

  return { position };
};

export default useLoop;
