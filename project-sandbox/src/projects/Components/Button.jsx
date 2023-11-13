import React from "react";

const Button = ({ text, btnClass, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-lg border border-2 ${btnClass}`}
    >
      {!text ? "click" : text} {icon}
    </button>
  );
};

export default Button;
