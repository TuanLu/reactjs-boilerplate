import React from "react";

const useRenderCounter = () => {
  const counterRef = React.useRef(0);
  return counterRef.current + 1;
};

export default useRenderCounter;
