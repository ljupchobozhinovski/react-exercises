import React from "react";

import "./LockSlider.css";
export default function LockSlider({ handleInput, sliderValue, width, updateUi }) {
  let sliderStyle = {
    appearance: "none",
    width: !width ? "350px" : { width },
    height: "50px",
    background: "lightgray",
    outline: "none"
  };
  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        className="slider mb-2 border-5 rounded-pill"
        style={sliderStyle}
        onInput={handleInput}
        value={sliderValue}
        onChange = {updateUi}
      />
    </div>
  );
}
