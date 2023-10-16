import React, { useState } from "react";
import SliderComp from "./SliderComp";
import Title from "../Components/Title";

export default function SliderApp() {
  const [slideValue, setSlideValue] = useState(0);

  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
  };

  let bgColor;
  let textColor;

  if (slideValue <= 25) {
    bgColor = "red";
    textColor = "white";
  }
  if (slideValue > 25 && slideValue <= 50) {
    bgColor = "green";
    textColor = "white";
  }
  if (slideValue > 50 && slideValue <= 75) {
    bgColor = "blue";
    textColor = "white";
  }
  if (slideValue > 75) {
    bgColor = "yellow";
    textColor = "black";
  }

  return (
    <div className="container text-center">
      <Title text={"Slide to grow"} />
      <SliderComp
        setValue={slideValue}
        handleInput={handleSliderValueChange}
        bgColor={bgColor}
        textCOlor={textColor}
      />
    </div>
  );
}
