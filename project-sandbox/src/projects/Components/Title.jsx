import React from "react";

const Title = ({ classes, text }) => {
  return (
    <h1 className={!classes ? "h1 text-center" : classes && "text-center"}>
      {!text ? "Title" : text}
    </h1>
  );
};

export default Title;
