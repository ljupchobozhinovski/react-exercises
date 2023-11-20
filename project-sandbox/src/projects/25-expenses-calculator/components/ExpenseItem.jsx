import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { ExpenseItemStyle } from "../style/ExpenseItem.style";

export default function ExpenseItem({ handleEdit, handleDelete, expense }) {
  const { charge, date, amount, id } = expense;

  return (
    <ExpenseItemStyle>
      <div className="container my-2">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col">
            <small className="text-primary"> {charge}</small>
            <br />
            <small className="text-danger">{date}</small>
          </div>
          <div className="col">
            <div className="text-success">${amount}</div>
          </div>
          <div className="col">
            <button
              className="btn btn-info m-2"
              onClick={() => handleEdit(id)}
            >
              {" "}
              <MdEdit />
            </button>

            <button
              className="btn btn-danger m-2"
              onClick={() => handleDelete(id)}
            >
              {" "}
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </ExpenseItemStyle>
  );
}
