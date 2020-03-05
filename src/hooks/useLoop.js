import { useState, useEffect } from "react";

const useLoop = ({ tickMs, tickCount }) => {
  const start = 0;
  const reset = tickCount - 1;
  const [position, setPosition] = useState(start);

  useEffect(() => {
    const loop = window.setInterval(() => {
      if (position < reset) {
        setPosition(position + 1);
      } else if (position === reset) {
        setPosition(start);
      }
    }, tickMs);

    return () => {
      window.clearInterval(loop);
    };
  });

  return { position };
};

export default useLoop;
