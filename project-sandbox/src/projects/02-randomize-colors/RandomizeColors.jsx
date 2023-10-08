import React from "react";
import Title from "../Components/Title";

const RandomizeColors = () => {
  const handleClick = (event) => {
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    event.target.style.backgroundColor = getRandomColor();
  };

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <div>
        <Title text={"Randomize Color"} classes={"m-4 p-5"} />
      </div>
      <div className="d-flex justify-content-around">
        <button className="btn btn-danger" onClick={handleClick}>
          Click me
        </button>
        <button className="btn btn-primary" onClick={handleClick}>
          Click me
        </button>
        <button className="btn btn-warning" onClick={handleClick}>
          Click me
        </button>
        <button className="btn btn-info" onClick={handleClick}>
          Click me
        </button>
        <button className="btn btn-secondary" onClick={handleClick}>
          Click me
        </button>
      </div>
    </>
  );
};

export default RandomizeColors;
