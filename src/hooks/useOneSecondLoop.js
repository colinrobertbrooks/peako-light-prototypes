import { useState, useEffect } from "react";

const useOneSecondLoop = ({ end }) => {
  const start = 0;
  const [position, setPosition] = useState(start);
  const increment = 1;

  useEffect(() => {
    const loop = window.setInterval(() => {
      if (position < end) {
        setPosition(position + increment);
      }
      if (position === end) {
        setPosition(start + increment);
      }
    }, 1000);

    return () => {
      window.clearInterval(loop);
    };
  });

  return { position };
};

export default useOneSecondLoop;
