import React, { useEffect, useRef, useState } from "react";
import FormGroup from "../Components/FormGroup";
import CompoundInterestRateCalc from "./CompoundInterestRateCalc";

export default function CompoundInterestRateApp() {
  let inputPrinciple = useRef(null);
  useEffect(() => {
    inputPrinciple.current.focus();
  }, []);

  const [compound, setCompound] = useState({
    principleAmount: "",
    monthlyContribution: null,
    interestRate: "",
    years: ""
  });

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card w-50">
        <div className="card-header py-3">
          <h5>Compound Interest Rate App</h5>
        </div>
        <div className="card-body bg-warning">
          <FormGroup
            className={"form-control my-2"}
            labelText={"Principal amount €"}
            inputType={"number"}
            values={compound.principleAmount}
            onChange={(e) =>
              setCompound({ ...compound, principleAmount: e.target.value })
            }
            reference={inputPrinciple}
          />
          <FormGroup
            className={"form-control my-2"}
            labelText={"Monthly contribution €"}
            inputType={"number"}
            values={compound.monthlyContribution}
            onChange={(e) =>
              setCompound({ ...compound, monthlyContribution: e.target.value })
            }
          />

          <FormGroup
            className={"form-control my-2"}
            labelText={"Interest rate %"}
            inputType={"number"}
            values={compound.interestRate}
            onChange={(e) =>
              setCompound({ ...compound, interestRate: e.target.value })
            }
          />

          <FormGroup
            className={"form-control my-2"}
            labelText={"Years of investment"}
            inputType={"number"}
            values={compound.years}
            onChange={(e) =>
              setCompound({ ...compound, years: e.target.value })
            }
          />
        </div>
        <div className="card-footer text-end py-3 bg-primary text-light fw-bold fs-5">
          <CompoundInterestRateCalc
            principleAmount={compound.principleAmount}
            interestRate={compound.interestRate}
            years={compound.years}
            monthlyContribution={compound.monthlyContribution}
          />
        </div>
      </div>
    </div>
  );
}
