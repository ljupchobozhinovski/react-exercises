import React, { useState, useEffect } from "react";
import PopUpComponent from "../Components/PopUpComponent";
import Button from "../Components/Button";
import Title from "../Components/Title";

export default function PopUpApp() {
  const [trigger, setTrigger] = useState(false);
  const [timeTrigger, setTimeTrigger] = useState(false);

  const triggerPopup = () => {
    setTrigger(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true);
    }, 3000);
  }, []);

  return (
    <div className="text-center">
      <Title text={"Click for popup or wait 3s"} />
      <Button btnClass={"btn-primary"} onClick={triggerPopup} />

      <PopUpComponent
        type={"alert-info"}
        title={"Triggered popup"}
        text={"This popup was triggered by a button"}
        handleClose={setTrigger}
        trigger={trigger}
      />

      <PopUpComponent
        type={"alert-danger"}
        title={"TimeTriggered PopUp"}
        text={"This popup was triggered by a delay"}
        handleClose={setTimeTrigger}
        trigger={timeTrigger}
      />
    </div>
  );
}
