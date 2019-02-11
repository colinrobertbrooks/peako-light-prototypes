import { useState, useEffect } from "react";

const useOneSecondLoop = ({ end }) => {
  const start = 0;
  const reset = end - 1;
  const [position, setPosition] = useState(start);

  useEffect(() => {
    const loop = window.setInterval(() => {
      if (position < reset) {
        setPosition(position + 1);
      } else if (position === reset) {
        setPosition(start);
      }
    }, 1000);

    return () => {
      window.clearInterval(loop);
    };
  });

  return { position };
};

export default useOneSecondLoop;
