import React from "react";
import classnames from "classnames";

const Button = ({ disabled, children, doClick = () => {}, checkColor }) => {
  function getButtonClass() {
    return classnames("text-white focus:outline-none px-4 py-1 rounded-md", {
      "bg-blue-500 hover:bg-blue-600": !disabled,
      "bg-gray-300": disabled && checkColor !== "darkGray",
      "bg-red-500 hover:bg-red-600": checkColor === "red",
      "bg-gray-500 hover:bg-gray-600": checkColor === "darkGray",
    });
  }
  
  return (
    <button className={getButtonClass()} onClick={doClick}>
      {children}
    </button>
  );
};

export default Button;
