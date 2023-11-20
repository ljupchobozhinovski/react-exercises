import React, { useState } from "react";
import Title from "../Components/Title";
import FormGroup from "../Components/FormGroup";
import Button from "../Components/Button";
export default function MortgageCalcApp() {
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayments, setMonthlyPayments] = useState("");

  function calcLoanAmount() {
    setLoanAmount(Number(homeValue) - Number(downPayment));
    return loanAmount;
  }

  function calcMonthlyPayment() {
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }

    function yearsToMonths(years) {
      return years * 12;
    }

    setMonthlyPayments(
      (percentageToDecimal(interestRate) * loanAmount) /
        (1 -
          Math.pow(
            1 + percentageToDecimal(interestRate),
            -yearsToMonths(loanDuration)
          ))
    );
    return monthlyPayments;
  }

  let alertClass;

  monthlyPayments
    ? (alertClass = "alert-success")
    : (alertClass = "alert-danger");

  return (
    <div className="container mt-5" style={{ width: 800 }}>
      <div className="card">
        <div className="card-header">
          <Title text={"Mortgage Calc App"} />
        </div>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div
              className="d-grid"
              style={{ gridTemplateColumns: "1fr 1fr", gap: 10 }}
            >
              <FormGroup
                labelText={"Property value $"}
                inputType={"number"}
                placeholder={"Enter the value of the property"}
                values={homeValue}
                onInput={(e) => setHomeValue(e.target.value)}
                onKeyUp={calcLoanAmount}
              />
              <FormGroup
                labelText={"Down payments $"}
                inputType={"number"}
                placeholder={"Enter your funds"}
                values={downPayment}
                onInput={(e) => setDownPayment(e.target.value)}
                onKeyUp={calcLoanAmount}
              />
            </div>
            <div>
              <FormGroup
                labelText={"Loan amount $"}
                inputType={"number"}
                placeholder={"The calculated amount of loan"}
                readOnly={true}
                values={loanAmount}
                className={"bg-light"}
              />
            </div>
            <div
              className="d-grid"
              style={{ gridTemplateColumns: "1fr 1fr", gap: 10 }}
            >
              <FormGroup
                labelText={"Interest rate %"}
                inputType={"number"}
                placeholder={"Enter your interest rate"}
                values={interestRate}
                onInput={(e) => setInterestRate(e.target.value)}
              />
              <FormGroup
                labelText={"Loan duration(years)"}
                placeholder={"Enter the duration of your loan in years"}
                values={loanDuration}
                onInput={(e) => setLoanDuration(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center flex-column m-4">
              <Button
                btnClass={"btn btn-warning m-4"}
                text={"Calculate"}
                onClick={calcMonthlyPayment}
              />

              <h4 className={`${(alertClass = "alert alert-danger")}`}>
                {monthlyPayments
                  ? `Monthly payment : ${monthlyPayments.toFixed(2)}`
                  : "Please Complete all fields"}
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
