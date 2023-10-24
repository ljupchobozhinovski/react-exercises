import React from "react";
import Button from "./Button";

export default function PopUpComponent({
  type,
  title,
  text,
  handleClose,
  trigger
}) {
  const popUpContainer = {
    position: "absolute",
    top: "0",
    height: "100vh",
    width: "100vw",
    background: "rgba (0,0,0,.1)",
    color: "red",
    zIndex: "-1"
  };
  const popUpStyle = {
    position: "relative",
    margin: "40vh auto",
    zIndex: "1"
  };

  return (
    trigger && (
      <div className="container " style={popUpContainer}>
        <div className={`${type} alert text-left w-50`} style={popUpStyle}>
          <div className="d-flex flex-column">
            <h4 className="mb-1">{title && title}</h4>
            <p>{text && text}</p>
          </div>
          <Button
            btnClass={"btn-close"}
            text={""}
            onClick={() => handleClose(false)}
          />
        </div>
      </div>
    )
  );
}
