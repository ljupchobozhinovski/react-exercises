import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";
import LockScreen from "./img/LockScreen.jpg";
import HomeScreen from "./img/HomeScreen.jpg";

export default function SlideToUnlock() {
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreen}) center/cover no-repeat`
  });

  const [lockSLiderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value);
    console.log(lockSLiderValue);
  };

  const updateLockScreen = (shouldLockScreen) => {
    console.log(shouldLockScreen);

    if (lockSLiderValue > 95 && !shouldLockScreen) {
      setLockSliderValue(0);
      setShowLockSlider(false);
      setUiProps({
        uiText: "Home",
        uiColor: "rgba(64, 177, 111, 0.667)",
        uiBg: `url(${HomeScreen}) center/cover no-repeat`
      });
    } else if (shouldLockScreen) {
      setShowLockSlider(true);
      setUiProps({
        uiText: "Unlock Screen",
        uiColor: "#eee",
        uiBg: `url(${LockScreen}) center/cover no-repeat`
      });
    }
  };

  return (
    <div
      className="container text-center d-flex flex-column justify-content-around align-items-center mt-5 border-5 rounded-4 shadow-lg"
      style={{
        height: "80vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        background: uiProps.uiBg
      }}
    >
      <h1 style={{ color: uiProps.uiColor }}>{uiProps.uiText}</h1>

      {showLockSlider ? (
        <LockSlider
          width={"350px"}
          handleInput={handleLockSliderInput}
          value={lockSLiderValue}
          updateUi={() => updateLockScreen(false)}
        />
      ) : (
        <AiFillUnlock
          className="fs-1"
          onClick={() => {
            updateLockScreen(true);
          }}
        />
      )}
    </div>
  );
}
