import React, { memo } from "react";
import "./index.scss";

const Button = ({ title = "Button Title", onClick = () => false }) => {
  return (
    <button type="button" className="cp-btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default memo(Button);
