import React from "react";

const useRenderCounter = () => {
  const counterRef = React.useRef(0);
  return counterRef.current++;
};

export default useRenderCounter;
