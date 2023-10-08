import React from "react";

const Title = ({ classes, text }) => {
  return (
    <h1 className={!classes ? "h1 text-danger" : classes && "h1 text-center"}>
      {!text ? "Title" : text}
    </h1>
  );
};

export default Title;
