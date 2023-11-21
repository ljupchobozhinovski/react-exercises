import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import { CurrencyContext } from "../context/currencies-context";
export default function Course({ course }) {
  const currency = React.useContext(CurrencyContext);

  const { title, price, img } = course;

  const contextPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code
  }).format(price * currency.conversionRate);

  const [courseBG, setCourseBG] = useState();

  useEffect(() => {
    if (currency.code === "USD") {
      setCourseBG("bg-warning");
    }
    if (currency.code === "EUR") {
      setCourseBG("bg-primary");
    }
    if (currency.code === "GBP") {
      setCourseBG("bg-info");
    }
  }, [currency.code]);

  return (
    <li>
      <div className="m-2 card" style={{ width: 250 }}>
        <div className={`card-header fw-bold ${courseBG}`}>{title}</div>
        <img
          src={img}
          class="card-img-top my-2"
          alt="Course Image"
          style={{ height: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div
          className={`card-footer d-flex justify-content-between align-items-center ${courseBG}`}
        >
          <small>{contextPrice}</small>

          <Button btnClass={"btn-success"} text={"Buy"} />
        </div>
      </div>
    </li>
  );
}
