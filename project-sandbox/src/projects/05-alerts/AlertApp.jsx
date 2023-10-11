import React from "react";
import Alert from "../Components/Alert";

const AlertApp = () => {
  return (
    <>
      <Alert type={`success`} message={"Successful login"} />
      <Alert type={`info`} message={"Time triggered"} delay={true} delayTime={1000}/>
    </>
  );
};

export default AlertApp;
