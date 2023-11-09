import React from "react";
import Button from "../Components/Button";
export default function Task({ date, type, setDate, setType, onClick }) {
  return (
    <div className="d-flex justify-content-between border-bottom mb-3 py-3">
      <input type="datetime-local" value={date} onChange={setDate} />
      <input
        type="text"
        value={type}
        onChange={setType}
        placeholder="Specify the Task"
      />
      <Button text={"+ Add"} btnClass={"btn-warning"} onClick={onClick} />
    </div>
  );
}
