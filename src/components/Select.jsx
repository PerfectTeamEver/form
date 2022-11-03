import React from "react";

const Select = ({ options, placeholder, postFix, ...props }) => {
  return (
    <div className="input-style">
      <select placeholder={placeholder} {...props}>
        <option disabled={true} value="" selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option} {postFix}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
