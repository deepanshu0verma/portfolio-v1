// src/components/tooltip.js
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import default styles

const Tooltip = ({ id, text, children }) => {
  return (
    <>
      <span data-tooltip-id={id} data-tooltip-content={text}>
        {children}
      </span>
      <ReactTooltip id={id} place="top" effect="solid" />
    </>
  );
};

export default Tooltip;