import React, { useState, useEffect } from "react";
import ship from "./ship.css";
import Button from "../Components/Button";
import SpaceShipObj from "./objects/SpaceShipObj";
import MoonObj from "./objects/MoonObj";
import PlanetObj from "./objects/PlanetObj";
import Ship from "./svg/rocket.svg";
import Planet from "./svg/earth.svg";
import Moon from "./svg/moon.svg";
import Penguin from "./svg/penguin.svg";

export default function SpacePenguinApp() {
  //   const [shipAction, setShipAction] = useState();
  //   const [transformScale, setTransformScale] = useState(200);

  const [shipProps, setShipProps] = useState({
    action: "",
    scale: 200
  });

  const startShip = () => {
    // setShipAction("fly");
    // setTransformScale(50);

    setShipProps({ action: "fly", scale: 50 });
  };

  const landShip = () => {
    // setShipAction("land");
    // setTransformScale(200);

    setShipProps({ action: "land", scale: 200 });
  };

  const [shipType, setShipType] = useState(Ship);

  useEffect(() => {
    if (shipProps.action === "land") {
      setShipType(Penguin);
      setTimeout(() => {
        setShipType(Ship);
      }, 5500);
    }
    if (shipProps.action === "fly") {
      setShipType(Ship);
      setTimeout(() => {
        setShipType(Penguin);
      }, 5500);
    }
  }, [shipProps.action]);

  return (
    <div className="space">
      <Button text={"Launch"} btnClass={"btn-danger"} onClick={startShip} />
      <section className="env">
        <SpaceShipObj
          changeShip={shipType}
          scale={shipProps.scale}
          start={shipProps.action}
        />
        <PlanetObj Planet={Planet} />
        <MoonObj Moon={Moon} />
      </section>
      <Button text={"Land"} btnClass={"btn-info"} onClick={landShip} />
    </div>
  );
}
