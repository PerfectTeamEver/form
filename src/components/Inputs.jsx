import React from "react";

function Inputs({ placeholder, ...props }) {
  return (
    <div className="input-style">
      <input type="text" placeholder={placeholder} {...props} />
    </div>
  );
}

export default Inputs;
