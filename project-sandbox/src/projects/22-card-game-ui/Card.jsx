import React from "react";
import Shield from "./svg/shield.svg";
import Sword from "./svg/sword.svg";
import Horn from "./svg/horn.svg";
export default function Card({
  player,
  defenseValue,
  attackValue,
  unitTypeName,
  unitTypeImg,
  moralValue,
  unitValue
}) {
  let iconStyle = {
    marginRight: "10",
    width: 20,
    background: "transparent"
  };
  let mirror;
  function mirrorImg(player) {
    player === "player_2" ? (mirror = "scaleX(-1)") : (mirror = "scaleX(1)");
    return mirror;
  }
  mirrorImg(player);
  return (
    <div
      className={`${
        player === "player_1" ? "bg-light" : "bg-warning"
      } card w-50 text-center m-1 shadow-lg`}
    >
      <div className="card-header p-3 d-flex justify-content-between">
        <div className="defense">
          <img
            src={Shield}
            class="card-img-top"
            alt="Shield"
            style={iconStyle}
          />
          <span>{!defenseValue && "00"}</span>
        </div>
        <div className="attack">
          <img src={Sword} class="card-img-top" alt="Sword" style={iconStyle} />
          <span>{!attackValue && "00"}</span>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          {!unitTypeName ? "Unit Type Name" : unitTypeName}
        </h5>
        <img
          src={unitTypeImg}
          class="card-img-top"
          alt="unitTypeImg"
          style={{ transform: `${mirror} ` }}
        />
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>

      <div className="card-footer p-3 d-flex justify-content-between">
        <div className="defense">
          <img
            src={Horn}
            class="card-img-top"
            alt="Shield"
            style={iconStyle}
          />
          <span>{!moralValue && "00"}</span>
        </div>
        <div className="attack">
          <img src={Sword} class="card-img-top" alt="Sword" style={iconStyle} />
          <span>{!unitValue && "00"}</span>
        </div>
      </div>
    </div>
  );
}
