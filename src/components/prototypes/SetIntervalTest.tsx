import React, { useEffect, useRef } from "react";

const SetIntervalTest: React.FC = () => {
  const countRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      countRef.current++;
      console.log(`testing ${countRef.current}`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default SetIntervalTest;
