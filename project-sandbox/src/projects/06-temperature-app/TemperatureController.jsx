import React, { useState } from "react";
import Button from "../Components/Button";
const TemperatureController = () => {
  const [temperature, setTemperature] = useState(0);
  return (
    <div className="container text-center">
      <div class="card">
        <img
          src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          class="card-img-top"
          alt="temperature"
        />
        <div className="card-body">
          <h5 className="card-title">TEMPERATURE</h5>

          <h2
            className={`card-text fs-1 badge rounded-pill ${
              temperature > 0 ? "bg-danger" : "bg-primary"
            }`}
          >
            {temperature} °C
          </h2>

          <div className="card-footer d-flex justify-content-around">
            <Button
              btnClass={"btn-warning"}
              text={"-"}
              onClick={() => {
                setTemperature(temperature - 1);
              }}
            >
              {" "}
            </Button>
            <Button
              btnClass={"btn-warning"}
              text={"+"}
              onClick={() => {
                setTemperature(temperature + 1);
              }}
            >
              {" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureController;
