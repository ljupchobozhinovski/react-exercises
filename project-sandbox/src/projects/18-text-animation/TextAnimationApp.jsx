import React, { useState, useRef, useEffect } from "react";
import Button from "../Components/Button";
import FormGroup from "../Components/FormGroup";
import AnimatedText from "react-animated-text-content";

export default function TextAnimationApp() {
  const [inputValue, setInputValue] = useState("");
  const [animatedText, setAnimatedText] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setAnimatedText(inputValue);
    setInputValue(() => "");
  };

  let inputText = useRef(null);
  useEffect(() => {
    inputText?.current?.focus();
  }, []);

  return (
    <div className="container text-center mt-5">
      <form
        className="container d-flex justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormGroup
          labelText={"Type in your text to be animated"}
          inputType={"text"}
          placeholder={"Your text"}
          values={inputValue}
          onChange={handleInputChange}
          ref={inputText}
        />
        <Button
          text={"Clear"}
          btnClass={"btn-lg btn-danger"}
          onClick={handleClear}
        />
      </form>
      {animatedText && (
        <AnimatedText
          type="char"
          interval={0.04}
          duration={1.1}
          animation={{ x: "-150px", y: "-250px", ease: "linear" }}
          className="text-danger fs-1"
        >
          {animatedText}
        </AnimatedText>
      )}
    </div>
  );
}
