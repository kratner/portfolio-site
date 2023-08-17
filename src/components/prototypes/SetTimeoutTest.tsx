import React, { useEffect } from "react";

const SetTimeoutTest: React.FC = () => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Test message after 3 seconds");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default SetTimeoutTest;
