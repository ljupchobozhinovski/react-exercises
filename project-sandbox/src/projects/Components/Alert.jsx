import React, { useState, useEffect } from "react";
import Button from "./Button";
export default function Alert({ type, message, delay = false, delayTime = 3000 }) {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = (e) => {
    e.target.parentElement.classList.add("fade");
    setTimeout(() => {
      setShowAlert(false);
    }, delayTime);
  };

  useEffect((delay) => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
  });

  return (
    showAlert && (
      <div className={` container w-50 alert alert-${type}`}>
        <div className="d-flex justify-content-between alert-close">
          <span>{message}</span>
          <Button btnClass={"btn"} text={"X"} onClick={closeAlert} />
        </div>
      </div>
    )
  );
}

// const Alert = (type) => {
//   const [showAlert, setShowAlert] = useState(true);
//   return (showAlert && <div className={`alert alert-${type}`}>Alert</div>);
// };

// export default Alert;
