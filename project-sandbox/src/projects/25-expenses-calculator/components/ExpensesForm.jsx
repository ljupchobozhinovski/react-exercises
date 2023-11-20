import React from "react";
import Button from "../../Components/Button";
import FormGroup from "../../Components/FormGroup";
import { MdEdit, MdAddCircle } from "react-icons/md";

export default function ExpensesForm({
  handleSubmit,
  date,
  handleDate,
  charge,
  handleCharge,
  amount,
  handleAmount,
  edit
}) {
  return (
    <form onSubmit={handleSubmit} className="card bg-primary text-light">
      <div className="card-header"></div>
      <div className="card-body">
        <FormGroup
          labelText={"Data"}
          inputType="date"
          values={date}
          onChange={handleDate}
        />
        <FormGroup
          labelText={"Expense"}
          inputType="text"
          values={charge}
          onChange={handleCharge}
          placeholder={"e.g. Rent"}
         
        />
        <FormGroup
          labelText={"Amount"}
          inputType="number"
          values={amount}
          onChange={handleAmount}
          placeholder={"e.g. 1500"}
        />
        {edit ? (
          <Button
            text={"Edit"}
            btnClass={"btn btn-warning"}
            icon={<MdEdit className="btn-icon" />}
          />
        ) : (
          <Button
            text={"Add"}
            btnClass={"btn btn-warning"}
            icon={<MdAddCircle className="btn-icon" />
          }
          />
        )}
      </div>
    </form>
  );
}
